import { config } from "../config";
import { StakingValidatorPrefsSetEvent } from "../types/events";
import { getUserAddress } from "../utils";
import { IValidatorPrefsSet } from "../interfaces/validator-prefs-set";
import { ValidatorPrefs as ValidatorPrefsV41 } from "../types/v41";
import { ValidatorPrefs as ValidatorPrefsV6 } from "../types/v6";

export const validatorPrefsSetMapping = (
  e: StakingValidatorPrefsSetEvent
): Partial<IValidatorPrefsSet> => {
  if (e.isV6) {
    let rec: { stash: Uint8Array; prefs: ValidatorPrefsV6 };
    let [stash, prefs] = e.asV6;
    rec = { stash, prefs };
    return {
      stash: getUserAddress(config.chainPrefix, rec.stash),
      commission: rec.prefs.commission,
      blocked: rec.prefs.blocked,
    };
  } else if (e.isV41) {
    let rec: { stash: Uint8Array; prefs: ValidatorPrefsV41 };
    let { stash, prefs } = e.asV41;
    rec = { stash, prefs };
    return {
      stash: getUserAddress(config.chainPrefix, rec.stash),
      commission: rec.prefs.commission,
      blocked: rec.prefs.blocked,
    };
  } else {
    throw new Error("Unsupported spec");
  }
};
