import { BatchContext } from "@subsquid/substrate-processor";
import { Store } from "@subsquid/typeorm-store";
import { IEraPaidEvent } from "../interfaces";

export const handleEraPaid = async (
  ctx: BatchContext<Store, any>,
  Batchdata: IEraPaidEvent[]
) => {
  await ctx.store.save(Batchdata);
};
