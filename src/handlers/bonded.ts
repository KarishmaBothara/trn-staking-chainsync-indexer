import { BatchContext } from "@subsquid/substrate-processor";
import { Store } from "@subsquid/typeorm-store";
import { IBondedEvent } from "../interfaces";

export const handleBonded = async (
  ctx: BatchContext<Store, any>,
  Batchdata: IBondedEvent[]
) => {
  await ctx.store.save(Batchdata);
};
