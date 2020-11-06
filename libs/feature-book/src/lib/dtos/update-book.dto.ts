import { ObjectId } from 'mongodb';
import { Transform } from 'class-transformer';
import { Transformers } from '../../../../utils/transformer';

export class UpdateBookDTO {
  @Transform(Transformers.toObjectId)
  _id: ObjectId;

  name: string;
  isbn: number;

  @Transform(Transformers.toObjectId)
  author: ObjectId;
}
