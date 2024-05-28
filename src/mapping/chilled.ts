import { config } from "../config";
import { IChilledEvent } from "../interfaces";
import { StakingChilledEvent } from "../types/events";
import * as ss58 from "@subsquid/ss58";
import { getUserAddress } from "../utils";

export const chilledMapping = (
  e: StakingChilledEvent
): Partial<IChilledEvent> => {
  let rec: { stash: Uint8Array };
  if (e.isV6) {
    let stash = e.asV6;
    rec = { stash };
  }
  else if (e.isV41) {
    let { stash } = e.asV41;
    rec = { stash };
  }
  else {
    throw new Error("Unsupported spec");
  }

  return {
    stash: getUserAddress(config.chainPrefix, rec.stash),
  };
};
