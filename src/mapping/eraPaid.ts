import { IEraPaidEvent } from "../interfaces";
import { StakingEraPaidEvent } from "../types/events";

export const eraPaidMapping = (
  e: StakingEraPaidEvent
): Partial<IEraPaidEvent> => {
  let rec: { eraIndex: number; validatorPayout: bigint; remainder: bigint };
  if (e.isV6) {
    let [eraIndex, validatorPayout, remainder] = e.asV6;
    rec = { eraIndex, validatorPayout, remainder };
  }
  else if (e.isV41) {
    let { eraIndex, validatorPayout, remainder } = e.asV41;
    rec = { eraIndex, validatorPayout, remainder };
  }
  else {
    throw new Error("Unsupported spec");
  }

  return {
    eraIndex: rec.eraIndex,
    validatorPayout: rec.validatorPayout,
    remainder: rec.remainder,
  };
};
