import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Author {
  @Prop({ required: true })
  firstName: string;
  
  @Prop()
  lastName: string;
}

export type AuthorDocument = Author & Document;
export const AuthorSchema = SchemaFactory.createForClass(Author).index({ '$**': 'text' });
