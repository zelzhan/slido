import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from '../../../../schemas/book.schema';

@Injectable()
export class BooksSearchService {
  constructor(@InjectModel('book') private bookModel: Model<BookDocument>) {}

  async search(query: string): Promise<Book[]> {
    console.log(query);

    return this.bookModel
      .find({ name: { $regex: new RegExp(query, 'i') } })
      .limit(10);
  }
}
