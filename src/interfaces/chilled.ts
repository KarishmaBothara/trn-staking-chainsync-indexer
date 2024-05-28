import { IBaseEvent } from "./base";

export interface IChilledEvent extends IBaseEvent {
  stash: string;
}
