import { IBaseEvent } from "./base";

export interface IUnbondedEvent extends IBaseEvent {
  stash: string;
  amount: bigint;
}
