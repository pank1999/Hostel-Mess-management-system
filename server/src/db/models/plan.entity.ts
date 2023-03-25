import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Plan extends Model<Plan> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  noOfMeals: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;
}
