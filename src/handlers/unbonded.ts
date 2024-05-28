import { BatchContext } from "@subsquid/substrate-processor";
import { Store } from "@subsquid/typeorm-store";
import { IUnbondedEvent } from "../interfaces";

export const handleUnbonded = async (
  ctx: BatchContext<Store, any>,
  Batchdata: IUnbondedEvent[]
) => {
  await ctx.store.save(Batchdata);
};
