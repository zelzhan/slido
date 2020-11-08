import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Author } from './author.schema';
import { ObjectID } from 'mongodb';

@Schema()
export class Book {
  @Prop({ required: true })
  name: string;

  @Prop()
  isbn: number;

  @Prop({ type: Types.ObjectId, ref: Author, required: true })
  author: ObjectID;
}
const book = SchemaFactory.createForClass(Book);
book.index({ '$**': 'text' });

export type BookDocument = Book & Document;
export const BookSchema = book;
