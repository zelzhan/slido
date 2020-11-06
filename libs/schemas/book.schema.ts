import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book {
  @Prop()
  name: string;

  @Prop()
  isbn: number;

  @Prop()
  author: string;
}

export type CatDocument = Book & Document;
export const BookSchema = SchemaFactory.createForClass(Book);
