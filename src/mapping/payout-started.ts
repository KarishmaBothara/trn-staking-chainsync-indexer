import { config } from "../config";
import { IEraPaidEvent } from "../interfaces";
import { IPayoutStarted } from "../interfaces/payout-started";
import { StakingPayoutStartedEvent } from "../types/events";
import { getUserAddress } from "../utils";

export const payoutStartedMapping = (
  e: StakingPayoutStartedEvent
): Partial<IPayoutStarted> => {
  let rec: { eraIndex: number; validatorStash: Uint8Array };
  if (e.isV6) {
    let [eraIndex, validatorStash] = e.asV6;
    rec = { eraIndex, validatorStash };
  }
  else if (e.isV41) {
    let { eraIndex, validatorStash } = e.asV41;
    rec = { eraIndex, validatorStash };
  }
  else {
    throw new Error("Unsupported spec");
  }

  return {
    eraIndex: rec.eraIndex,
    validatorStash: getUserAddress(config.chainPrefix, rec.validatorStash),
  };
};
