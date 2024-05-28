import { BatchContext } from "@subsquid/substrate-processor";
import { Store } from "@subsquid/typeorm-store";
import { IPayoutStarted } from "../interfaces/payout-started";

export const handlePayoutStarted = async (
  ctx: BatchContext<Store, any>,
  Batchdata: IPayoutStarted[]
) => {
  await ctx.store.save(Batchdata);
};
