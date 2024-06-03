import { Type } from 'class-transformer';

export class InventoryItemDto {
  itemName: string;

  quantity: number;
}

export class CreateUserDto {
  readonly _id?: string;
  readonly username: string;
  readonly displayname?: string;
  readonly avatarUrl?: string;
  @Type(() => InventoryItemDto)
  inventory?: InventoryItemDto[];
}
