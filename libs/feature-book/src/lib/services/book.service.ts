import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from '../../../../schemas/book.schema';
import { CreateBookDTO } from '../dtos/create-book.dto';
import { ObjectId } from 'mongodb';
import { UpdateBookDTO } from '../dtos/update-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel('book') private bookModel: Model<BookDocument>) {}

  async create(createBookDto: CreateBookDTO): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async update(
    id: ObjectId,
    { _id, name, isbn, author }: UpdateBookDTO
  ): Promise<Book> {
    return this.bookModel.updateOne(
      { _id: id },
      { _id: _id, name: name, isbn: isbn, author: author }
    );
  }

  async find(id: ObjectId): Promise<Book> {
    return this.bookModel
      .findOne({
        _id: id,
      })
      .exec();
  }

  async delete(id: ObjectId) {
    return this.bookModel.deleteOne({ _id: id });
  }
}
