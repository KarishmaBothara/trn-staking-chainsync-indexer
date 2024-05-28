import { IBaseEvent } from "./base";

export interface IBondedEvent extends IBaseEvent {
  stash: string;
  amount: bigint;
}
