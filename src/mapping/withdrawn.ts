import { config } from "../config";
import { StakingWithdrawnEvent } from "../types/events";
import { getUserAddress } from "../utils";
import { IWithdrawnEvent } from "../interfaces/withdrawn";

export const withdrawnMapping = (
  e: StakingWithdrawnEvent
): Partial<IWithdrawnEvent> => {
  let rec: { stash: Uint8Array; amount: bigint };

  if (e.isV6) {
    let [stash, amount] = e.asV6;
    rec = { stash, amount };
  } else if (e.isV41) {
    let { stash, amount } = e.asV41;
    rec = { stash, amount };
  } else {
    throw new Error("Unsupported spec");
  }

  return {
    stash: getUserAddress(config.chainPrefix, rec.stash),
    amount: rec.amount,
  };
};
