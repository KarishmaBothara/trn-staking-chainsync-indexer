import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v6 from './v6'
import * as v41 from './v41'

export class StakingBondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Bonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Staking.Bonded') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get asV6(): [Uint8Array, bigint] {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Staking.Bonded') === '37cdcebffea8c7980ffc36615dc08c19d453da6b24375934b05742ec0976a78d'
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get asV41(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingChilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Chilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     * \[stash\]
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Staking.Chilled') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     * \[stash\]
     */
    get asV6(): Uint8Array {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Staking.Chilled') === 'f7efcafea59e4583bbae8382ff21e5351643fa2c2055abb480956e048b642755'
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get asV41(): {stash: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingEraPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.EraPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     * \[era_index, validator_payout, remainder\]
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Staking.EraPaid') === '1b75f96f7f74feed246668e0244abf707060018d56d88b1a638f75594d2a8005'
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     * \[era_index, validator_payout, remainder\]
     */
    get asV6(): [number, bigint, bigint] {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Staking.EraPaid') === '940fb56de13a3a5bb887ff8bc3518465d73e48a2e4418a6edb32a9d338f0b44a'
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get asV41(): {eraIndex: number, validatorPayout: bigint, remainder: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingKickedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Kicked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A nominator has been kicked from a validator. \[nominator, stash\]
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Staking.Kicked') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
    }

    /**
     * A nominator has been kicked from a validator. \[nominator, stash\]
     */
    get asV6(): [Uint8Array, Uint8Array] {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Staking.Kicked') === '4b8c0c698a45b348b0461662268151b9c66f9067a9d7dd0c6f1bf8ac56ca7916'
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get asV41(): {nominator: Uint8Array, stash: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingPayoutStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.PayoutStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Staking.PayoutStarted') === '2c4b427c85c14124b733c4b45f6cbb10b5c350a45cd3602a0c8d079a17a2aa0c'
    }

    /**
     * The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get asV6(): [number, Uint8Array] {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Staking.PayoutStarted') === 'bdc8dff2f506cde3e545a0834dc7ef974b659c11d82782853d412875dde46da3'
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get asV41(): {eraIndex: number, validatorStash: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Staking.Rewarded') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get asV6(): [Uint8Array, bigint] {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Staking.Rewarded') === '37cdcebffea8c7980ffc36615dc08c19d453da6b24375934b05742ec0976a78d'
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get asV41(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * One validator (and its nominators) has been slashed by the given amount.
     * \[validator, amount\]
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Staking.Slashed') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * One validator (and its nominators) has been slashed by the given amount.
     * \[validator, amount\]
     */
    get asV6(): [Uint8Array, bigint] {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Staking.Slashed') === '7d37451c8e85543a0aa889f425f032d911f6e2efb26ce976843c364cd1f6875b'
    }

    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    get asV41(): {staker: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakersElectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakersElected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new set of stakers was elected.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Staking.StakersElected') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A new set of stakers was elected.
     */
    get asV6(): null {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingUnbondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Unbonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has unbonded this amount. \[stash, amount\]
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Staking.Unbonded') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * An account has unbonded this amount. \[stash, amount\]
     */
    get asV6(): [Uint8Array, bigint] {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has unbonded this amount.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Staking.Unbonded') === '37cdcebffea8c7980ffc36615dc08c19d453da6b24375934b05742ec0976a78d'
    }

    /**
     * An account has unbonded this amount.
     */
    get asV41(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingValidatorPrefsSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.ValidatorPrefsSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A validator has set their preferences.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Staking.ValidatorPrefsSet') === '77033e54cf769257db97ad32f47df4554849d632084d279c9d4362c8843c074e'
    }

    /**
     * A validator has set their preferences.
     */
    get asV6(): [Uint8Array, v6.ValidatorPrefs] {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A validator has set their preferences.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Staking.ValidatorPrefsSet') === '006a037210530b384927ee916fad0f885485cff07db1342b5898e62c52e0e29f'
    }

    /**
     * A validator has set their preferences.
     */
    get asV41(): {stash: Uint8Array, prefs: v41.ValidatorPrefs} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue. \[stash, amount\]
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Staking.Withdrawn') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue. \[stash, amount\]
     */
    get asV6(): [Uint8Array, bigint] {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Staking.Withdrawn') === '37cdcebffea8c7980ffc36615dc08c19d453da6b24375934b05742ec0976a78d'
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get asV41(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}
