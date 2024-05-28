import { BatchContext, SubstrateBlock } from "@subsquid/substrate-processor";
import {
  StakingActiveEraStorage,
  StakingErasStakersStorage,
} from "../types/storage";
import { Store } from "@subsquid/typeorm-store";
import { getUserAddress } from "../utils";
import { config } from "../config";
import { ActiveEra, Staker, StakerType } from "../model";

export const StakingStorage = async (
  ctx: BatchContext<Store, any>,
  block: SubstrateBlock
) => {
  let activeEraStorage = new StakingActiveEraStorage(ctx, block);

  let activeEraInfo = await activeEraStorage.asV6.get();

  const blockNumber = block.height;

  const timestamp = new Date(block.timestamp);
  const activeEraEntity = new ActiveEra({
    id: `${activeEraInfo?.index}-${blockNumber}`,
    eraIndex: activeEraInfo?.index,
    blockNumber,
    timestamp,
  });

  const activeErasInCurrentBlock = await ctx.store.findBy(ActiveEra, {
    eraIndex: activeEraEntity.eraIndex,
  });

  if (activeErasInCurrentBlock.length === 0) {
    ctx.store.upsert(activeEraEntity);
  }

  console.log(`Current active era: ${activeEraInfo?.index}`);
  let erasStakersStorage = new StakingErasStakersStorage(ctx, block);
  const pageSize = 100;
  let stakers = [] as any[];

  if (activeEraInfo) {
      let pagedPairs = erasStakersStorage.asV6.getPairsPaged(pageSize, activeEraInfo.index);
      
      for await (let eraStakers of pagedPairs) { 
        const flatternStakers = eraStakers.map((data) => {
          const [[era, validatorAccount], exposure] = data; 
          const validator = new Staker({
            id: `${era}-${getUserAddress(
              config.chainPrefix,
              validatorAccount
            )}`,
            eraIndex: era,
            stash: getUserAddress(config.chainPrefix, validatorAccount),
            stakerType: StakerType.Validator,
            totalStake: exposure.total,
            parentStash: "",
          });

          const nominators = exposure.others.map((nominator) => {
            return new Staker({
              id: `${era}-${validator.stash}-${getUserAddress(
                config.chainPrefix,
                nominator.who
              )}`,
              eraIndex: era,
              stash: getUserAddress(config.chainPrefix, nominator.who),
              stakerType: StakerType.Nominator,
              totalStake: nominator.value,
              parentStash: validator.stash,
            });
          });

          return [validator, ...nominators];
        }).flat();

        stakers.push(...flatternStakers);
      }

    console.log(`${stakers.length} Stakers in era ${activeEraInfo.index}`);
    await ctx.store.save(stakers);
  }
};
