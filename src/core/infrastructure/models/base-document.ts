import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class BaseDocument extends Document {
  @Prop({ type: String, required: true, unique: true })
  public uuid: string;
}
