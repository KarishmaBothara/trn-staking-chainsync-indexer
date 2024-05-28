import { BatchContext } from "@subsquid/substrate-processor";
import { Store } from "@subsquid/typeorm-store";
import { IStakersElected } from "../interfaces";

export const handleStakersElected = async (
  ctx: BatchContext<Store, any>,
  Batchdata: IStakersElected[]
) => {
  await ctx.store.save(Batchdata);
};
