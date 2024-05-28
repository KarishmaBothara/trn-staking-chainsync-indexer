import { IBaseEvent } from "./base";

export interface IValidatorPrefsSet extends IBaseEvent {
  stash: string;
  commission: number;
  blocked: boolean;
}
