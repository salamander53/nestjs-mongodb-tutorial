import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class InventoryItem extends Document {
  @Prop({ required: true })
  itemName: string;

  @Prop({ required: true })
  amount: number;
}

export const InventoryItemSchema = SchemaFactory.createForClass(InventoryItem);
