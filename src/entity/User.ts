import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 20
    })
    account: string

    @Column({
        length: 20
    })
    pwd: string

    @Column()
    token: string
}
