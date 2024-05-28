import { config } from "../config";
import { ISlashedEvent } from "../interfaces/slashed";
import { StakingSlashedEvent } from "../types/events";
import * as ss58 from "@subsquid/ss58";
import { getUserAddress } from "../utils";

export const slashedMapping = (
  e: StakingSlashedEvent
): Partial<ISlashedEvent> => {
  let rec: { staker: Uint8Array; amount: bigint };

  if (e.isV6) {
    let [staker, amount] = e.asV6;
    rec = { staker, amount };
  }
  else if (e.isV41) {
    let { staker, amount } = e.asV41;
    rec = { staker, amount };
  }
  else {
    throw new Error("Unsupported spec");
  }

  return {
    staker: getUserAddress(config.chainPrefix, rec.staker),
    amount: rec.amount,
  };
};
