import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from 'libs/schemas/author.schema';
import { BookSchema } from 'libs/schemas/book.schema';
import { SearchAuthorController } from './controllers/search-author.controller';
import { SearchBookController } from './controllers/search-book.controller';
import { AuthorSearchService } from './services/search-author.service';
import { BooksSearchService } from './services/search-book.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'book', schema: BookSchema },
      { name: 'author', schema: AuthorSchema },
    ]),
  ],
  controllers: [SearchAuthorController, SearchBookController],
  providers: [AuthorSearchService, BooksSearchService],
})
export class FeatureSearchModule {}
