import { BatchContext } from "@subsquid/substrate-processor";
import { Store } from "@subsquid/typeorm-store";
import { IRewardedEvent } from "../interfaces";

export const handleRewarded = async (
  ctx: BatchContext<Store, any>,
  Batchdata: IRewardedEvent[]
) => {
  await ctx.store.save(Batchdata);
};
