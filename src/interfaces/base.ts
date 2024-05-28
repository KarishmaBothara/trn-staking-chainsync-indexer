export interface IBaseEvent {
  id: string;
  blockNumber: number;
  timestamp: Date;
  extrinsicHash?: string;
  extrinsicId?: string;
  extrinsicIndex?: number;
  blockHash?: string;
}
