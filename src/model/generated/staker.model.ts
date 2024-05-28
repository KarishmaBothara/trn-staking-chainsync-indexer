import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {StakerType} from "./_stakerType"

@Entity_()
export class Staker {
    constructor(props?: Partial<Staker>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 9, nullable: false})
    stakerType!: StakerType

    @Index_()
    @Column_("int4", {nullable: false})
    eraIndex!: number

    @Column_("text", {nullable: false})
    stash!: string

    @Column_("text", {nullable: true})
    parentStash!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalStake!: bigint
}
