import { lookupArchive } from "@subsquid/archive-registry";
import {
  BatchContext,
  BatchProcessorCallItem,
  BatchProcessorEventItem,
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from "@subsquid/substrate-processor";
import { config } from "./config";
import { registerEvents } from "./register-events";

export const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: config.datasource.archive,
    chain: config.datasource.chain,
  })
  .setBlockRange({
    from: config.startBlock,
  });

registerEvents(processor);


export type Item = BatchProcessorItem<typeof processor>;
export type EventItem = BatchProcessorEventItem<typeof processor>;
export type CallItem = BatchProcessorCallItem<typeof processor>;
export type ProcessorContext<Store> = BatchContext<Store, Item>;
