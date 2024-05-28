import { IBaseEvent } from "./base";

export interface IRewardedEvent extends IBaseEvent {
  stash: string;
  amount: bigint;
}
