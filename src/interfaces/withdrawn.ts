import { IBaseEvent } from "./base";

export interface IWithdrawnEvent extends IBaseEvent {
  stash: string;
  amount: bigint;
}
