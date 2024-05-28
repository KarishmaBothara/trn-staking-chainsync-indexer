import { BatchContext } from "@subsquid/substrate-processor";
import { Store } from "@subsquid/typeorm-store";
import { IWithdrawnEvent } from "../interfaces/withdrawn";

export const handleValidatorPrefSet = async (
  ctx: BatchContext<Store, any>,
  Batchdata: []
) => {
  await ctx.store.save(Batchdata);
};
