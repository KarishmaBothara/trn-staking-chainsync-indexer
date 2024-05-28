import {
  BatchContext,
  SubstrateBatchProcessor,
} from "@subsquid/substrate-processor";
import {
  bondedMapping,
  chilledMapping,
  eraPaidMapping,
  kickedMapping,
  payoutStartedMapping,
  rewardedMapping,
  slashedMapping,
  stakersElectedMapping,
  unbondedMapping,
} from "./mapping";
import {
  StakingBondedEvent,
  StakingChilledEvent,
  StakingEraPaidEvent,
  StakingKickedEvent,
  StakingPayoutStartedEvent,
  StakingRewardedEvent,
  StakingSlashedEvent,
  StakingStakersElectedEvent,
  StakingUnbondedEvent,
  StakingValidatorPrefsSetEvent,
  StakingWithdrawnEvent,
} from "./types/events";
import { Store } from "@subsquid/typeorm-store";
import {
  handleBonded,
  handleChilled,
  handleEraPaid,
  handleKicked,
  handlePayoutStarted,
  handleRewarded,
  handleSlashed,
  handleStakersElected,
  handleUnbonded,
} from "./handlers";

import {
  Bonded,
  Chilled,
  EraPaid,
  Kicked,
  PayoutStarted,
  Rewarded,
  Slashed,
  StakersElected,
  Unbonded,
  ValidatorPrefsSet,
  Withdrawn,
} from "./model";
import { withdrawnMapping } from "./mapping/withdrawn";
import { handleWithdrawn } from "./handlers/withdrawn";
import { validatorPrefsSetMapping } from "./mapping/validator-prefs-set";
import { handleValidatorPrefSet } from "./handlers/validator-prefs-set";

export const Events = {
  StakingEraPaid: "Staking.EraPaid",
  StakingRewarded: "Staking.Rewarded",
  StakingSlashed: "Staking.Slashed",
  StakingBonded: "Staking.Bonded",
  StakingUnbonded: "Staking.Unbonded",
  StakingKicked: "Staking.Kicked",
  StakingChilled: "Staking.Chilled",
  PayoutStarted: "Staking.PayoutStarted",
  StakersElected: "Staking.StakersElected",
  StakingWithdrawn: "Staking.Withdrawn",
  StakingValidatorPrefsSet: "Staking.ValidatorPrefsSet",
};

type MappingFunc = (event: any) => any;
type HandlerFunc = (ctx: BatchContext<Store, any>, Batchdata: any) => any;

export const EventHandlers: Record<
  string,
  {
    Event: any;
    Entity: any;
    Mapping: MappingFunc;
    Handler: HandlerFunc;
  }
> = {
  [Events.StakingBonded]: {
    Event: StakingBondedEvent,
    Entity: Bonded,
    Mapping: bondedMapping,
    Handler: handleBonded,
  },
  [Events.StakingUnbonded]: {
    Event: StakingUnbondedEvent,
    Entity: Unbonded,
    Mapping: unbondedMapping,
    Handler: handleUnbonded,
  },
  [Events.StakingEraPaid]: {
    Event: StakingEraPaidEvent,
    Entity: EraPaid,
    Mapping: eraPaidMapping,
    Handler: handleEraPaid,
  },
  [Events.StakingChilled]: {
    Event: StakingChilledEvent,
    Entity: Chilled,
    Mapping: chilledMapping,
    Handler: handleChilled,
  },
  [Events.StakingRewarded]: {
    Event: StakingRewardedEvent,
    Entity: Rewarded,
    Mapping: rewardedMapping,
    Handler: handleRewarded,
  },
  [Events.StakingSlashed]: {
    Event: StakingSlashedEvent,
    Entity: Slashed,
    Mapping: slashedMapping,
    Handler: handleSlashed,
  },
  [Events.StakingKicked]: {
    Event: StakingKickedEvent,
    Entity: Kicked,
    Mapping: kickedMapping,
    Handler: handleKicked,
  },
  [Events.PayoutStarted]: {
    Event: StakingPayoutStartedEvent,
    Entity: PayoutStarted,
    Mapping: payoutStartedMapping,
    Handler: handlePayoutStarted,
  },
  [Events.StakersElected]: {
    Event: StakingStakersElectedEvent,
    Entity: StakersElected,
    Mapping: stakersElectedMapping,
    Handler: handleStakersElected,
  },
  [Events.StakingWithdrawn]: {
    Event: StakingWithdrawnEvent,
    Entity: Withdrawn,
    Mapping: withdrawnMapping,
    Handler: handleWithdrawn,
  },
  [Events.StakingValidatorPrefsSet]: {
    Event: StakingValidatorPrefsSetEvent,
    Entity: ValidatorPrefsSet,
    Mapping: validatorPrefsSetMapping,
    Handler: handleValidatorPrefSet,
  },
};

export const registerEvents = (processor: SubstrateBatchProcessor) => {
  Object.values(Events).forEach((eventName) => {
    processor.addEvent(eventName, {
      data: {
        event: {
          args: true,
          extrinsic: true,
        },
      },
    } as const);
  });
};
