import { BatchContext } from "@subsquid/substrate-processor";
import { Store } from "@subsquid/typeorm-store";
import { ISlashedEvent } from "../interfaces/slashed";

export const handleSlashed = async (
  ctx: BatchContext<Store, any>,
  Batchdata: ISlashedEvent[]
) => {
  await ctx.store.save(Batchdata);
};
