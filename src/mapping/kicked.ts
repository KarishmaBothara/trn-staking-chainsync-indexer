import { config } from "../config";
import { IKickedEvent } from "../interfaces/kicked";
import { StakingKickedEvent } from "../types/events";
import * as ss58 from "@subsquid/ss58";
import { getUserAddress } from "../utils";

export const kickedMapping = (e: StakingKickedEvent): Partial<IKickedEvent> => {
  let rec: { nominator: Uint8Array; stash: Uint8Array };

  if (e.isV6) {
    let [nominator, stash] = e.asV6;
    rec = { nominator, stash };
  } else if (e.isV41) {
    let { nominator, stash } = e.asV41;
    rec = { nominator, stash };
  } else {
    throw new Error("Unsupported spec");
  }

  return {
    nominator: getUserAddress(config.chainPrefix, rec.nominator),
    stash: getUserAddress(config.chainPrefix, rec.stash),
  };
};
