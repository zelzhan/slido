import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Author } from './author.schema';

@Schema()
export class Book {
  @Prop()
  name: string;

  @Prop()
  isbn: number;

  @Prop({ type: Types.ObjectId, ref: Author.name})
  author: Author;
}

export type BookDocument = Book & Document;
export const BookSchema = SchemaFactory.createForClass(Book);
