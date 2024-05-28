import { IBaseEvent } from "./base";

export interface ISlashedEvent extends IBaseEvent {
  staker: string;
  amount: bigint;
}
