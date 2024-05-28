import { config } from "../config";
import { IBondedEvent } from "../interfaces/bonded";
import { StakingBondedEvent } from "../types/events";
import * as ss58 from "@subsquid/ss58";
import { getUserAddress } from "../utils";

export const bondedMapping = (e: StakingBondedEvent): Partial<IBondedEvent> => {
  let rec: { stash: Uint8Array; amount: bigint };

  if (e.isV6) {
    let [stash, amount] = e.asV6;
    rec = { stash, amount };
  }
  else if (e.isV41) {
    let { stash, amount } = e.asV41;
    rec = { stash, amount };
  }
  else {
    throw new Error("Unsupported spec");
  }

  return {
    stash: getUserAddress(config.chainPrefix, rec.stash),
    amount: rec.amount,
  };
};
