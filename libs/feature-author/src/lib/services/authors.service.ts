import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthorDocument } from '../../../../schemas/author.schema';
import { Author } from "../../../../schemas/author.schema";
import { CreateAuthorDTO } from '../dtos/create-author.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel('author') private authorModel: Model<AuthorDocument>
  ) {}

  async create(createAuthorDto: CreateAuthorDTO): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuthorDto);
    return createdAuthor.save();
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().exec();
  }

  async find(id: ObjectId): Promise<Author> {
    return this.authorModel
      .findOne({
        _id: id,
      })
      .exec();
  }
  async delete(id: ObjectId): Promise<{ ok?: any; n?: any }> {
    return this.authorModel.deleteOne({ _id: id });
  }
}
