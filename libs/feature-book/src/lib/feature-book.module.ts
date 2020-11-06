import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from 'libs/schemas/book.schema';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'book', schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class FeatureBookModule {}
