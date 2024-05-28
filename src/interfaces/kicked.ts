import { IBaseEvent } from "./base";

export interface IKickedEvent extends IBaseEvent {
  nominator: string;
  stash: string;
}
