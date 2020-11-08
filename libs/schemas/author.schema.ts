import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Author {
  @Prop({ required: true })
  firstName: string;

  @Prop()
  lastName: string;
}

const author = SchemaFactory.createForClass(Author);
author.index({ '$**': 'text' });

export type AuthorDocument = Author & Document;
export const AuthorSchema = author;
