import { HasOne, Model } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';
import { UsersPlan } from './users-plan.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
    unique: true,
  })
  mobileNumber: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column
  role: string;

  @HasOne(() => UsersPlan)
  usersPlan: UsersPlan;
}
