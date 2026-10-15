import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    afterInsert() {
        console.log('User created:', this.email);
    }

    @AfterUpdate()
    afterUpdate() {
        console.log('User updated:', this.email);
    }

    @AfterRemove()
    afterRemove() {
        console.log('User removed:', this.email);
    }

}