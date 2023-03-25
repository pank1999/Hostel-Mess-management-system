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
export class UsersPlan extends Model<UsersPlan> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  UserId: number;

  @ForeignKey(() => Plan)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  planId: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isActive: Boolean;
}
