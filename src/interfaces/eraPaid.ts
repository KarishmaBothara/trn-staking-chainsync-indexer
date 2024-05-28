import { IBaseEvent } from "./base";

export interface IEraPaidEvent extends IBaseEvent {
  eraIndex: number;
  validatorPayout: bigint;
  remainder: bigint;
}
