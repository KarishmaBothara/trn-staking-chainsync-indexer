import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class ActiveEra {
    constructor(props?: Partial<ActiveEra>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    eraIndex!: number

    @Index_()
    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("text", {nullable: true})
    extrinsicHash!: string | undefined | null
}
