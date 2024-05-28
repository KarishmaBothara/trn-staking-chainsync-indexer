import { BatchContext } from "@subsquid/substrate-processor";
import { Store } from "@subsquid/typeorm-store";
import { IChilledEvent } from "../interfaces";

export const handleChilled = async (
  ctx: BatchContext<Store, any>,
  Batchdata: IChilledEvent[]
) => {
  await ctx.store.save(Batchdata);
};
