import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { InventoryItem, InventoryItemSchema } from './Inventory.schema';

@Schema()
export class User extends Document {
  @Prop({
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
  })
  _id: string;

  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: false })
  displayname?: string;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop({ type: [InventoryItemSchema], default: [] })
  inventory: InventoryItem[];
}

export const UserSchema = SchemaFactory.createForClass(User);
