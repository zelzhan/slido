import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author, AuthorDocument } from 'libs/schemas/author.schema';

@Injectable()
export class AuthorSearchService {
  constructor(
    @InjectModel('author') private authorModel: Model<AuthorDocument>
  ) {}

  async search(query: string): Promise<Author[]> {
    return this.authorModel
      .find({
        $or: [
          { firstName: { $regex: new RegExp(query, 'i') } },
          { lastName: { $regex: new RegExp(query, 'i') } },
        ],
      })
      .limit(10);
  }
}
