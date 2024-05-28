import { In } from "typeorm";
import * as ss58 from "@subsquid/ss58";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import { processor } from "./processor";
import { EventHandlers, Events } from "./register-events";
import {
  BatchProcessorItem,
  BatchContext,
} from "@subsquid/substrate-processor";
import { StakingStorage } from "./storage/staking-storage";

type Item = BatchProcessorItem<typeof processor>;
type Ctx = BatchContext<Store, Item>;

processor.run(new TypeormDatabase(), async (ctx: Ctx) => {
  for (let block of ctx.blocks) {
    await StakingStorage(ctx, block.header);
    const eventEntities = initEventItems();

    for (let item of block.items) {
      if (Object.keys(EventHandlers).indexOf(item.name) === -1) {
        // console.log(`Event ${item.name} is not registered`);
        continue;
      }
      const { Event, Entity, Mapping } = EventHandlers[item.name];
      const rawEvent = (item as any).event;
      const event = new Event(ctx, rawEvent);

      const data = Mapping(event);
      const entity = new Entity({
        ...data,
        id: event.event.id,
        blockNumber: block.header.height,
        timestamp: new Date(block.header.timestamp),
        extrinsicHash: rawEvent.extrinsic?.hash,
        extrinsicId: rawEvent.extrinsic?.id,
        extrinsicIndex: rawEvent.extrinsic?.indexInBlock,
        blockHash: block.header.hash,
      });
      // console.log(entity);
      eventEntities[item.name].push(entity);
    }
    for (let [EventName, items] of Object.entries(eventEntities)) {
      if (items.length === 0) continue;

      const { Handler } = EventHandlers[EventName];
      await Handler(ctx, items);
    }
  }
});

const initEventItems = () => {
  const eventItems: Record<string, any> = {};
  Object.values(Events).forEach((e: string) => {
    eventItems[e] = [];
  });
  // console.log(eventItems);
  return eventItems;
};
