import { IUser } from 'src/interfaces/user.interface';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;

  @Column()
  isVerified: boolean;

  @Column({ type: 'json' })
  roles: JSON;

  @Column()
  @CreateDateColumn()
  createTime: number;
}
