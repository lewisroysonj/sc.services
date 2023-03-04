import { IExample } from 'src/interfaces/example.interface';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';

@Entity()
export class Example implements IExample {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Index()
  @Column()
  slug: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  @CreateDateColumn()
  createTime: Date;
}
