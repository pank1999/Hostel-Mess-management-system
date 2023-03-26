import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Plan } from './plan.entity';
import { User } from './user.entity';

@Table
export class Meal extends Model<Meal> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  timestamp: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Plan)
  @Column
  planId: number;

  @Column
  isFullFilled: boolean;

  @Column
  type: string;
}
