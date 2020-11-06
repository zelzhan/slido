import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from 'libs/schemas/book.schema';
import { BooksController } from './controllers/book.controller';
import { BooksService } from './services/book.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class FeatureBookModule {}
