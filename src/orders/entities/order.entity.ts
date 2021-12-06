import {
  AllowNull,
  Column,
  DataType,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

export enum OrderStatus {
  Aprovado = 'Aprovador',
  Pendente = 'Pendente',
}

@Table({
  tableName: 'orders',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Order {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUID })
  id: string;

  @Column({ type: DataType.DECIMAL(10,2), AllowNull: false })
  amount: number;

  @Column({ AllowNull: false, defaultValue: OrderStatus.Pendente })
  status: OrderStatus;
}
