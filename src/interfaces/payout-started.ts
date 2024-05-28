import { IBaseEvent } from "./base";

export interface IPayoutStarted extends IBaseEvent {
  eraIndex: number;
  validatorStash: string;
}
