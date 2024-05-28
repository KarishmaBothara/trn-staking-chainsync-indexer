import { BatchContext } from "@subsquid/substrate-processor";
import { Store } from "@subsquid/typeorm-store";
import { IWithdrawnEvent } from "../interfaces/withdrawn";

export const handleWithdrawn = async (
  ctx: BatchContext<Store, any>,
  Batchdata: IWithdrawnEvent[]
) => {
  await ctx.store.save(Batchdata);
};
