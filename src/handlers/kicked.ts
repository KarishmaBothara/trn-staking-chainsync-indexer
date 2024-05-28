import { BatchContext } from "@subsquid/substrate-processor";
import { Store } from "@subsquid/typeorm-store";
import { IKickedEvent } from "../interfaces/kicked";

export const handleKicked = async (
  ctx: BatchContext<Store, any>,
  Batchdata: IKickedEvent[]
) => {
  await ctx.store.save(Batchdata);
};
