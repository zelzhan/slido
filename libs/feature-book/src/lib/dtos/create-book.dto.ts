import { ObjectId } from 'mongodb';
import { Transform } from 'class-transformer';
import { Transformers } from '../../../../utils/transformer';

export class CreateBookDTO {
  name: string;
  isbn: string;

  @Transform(Transformers.toObjectId)
  author: ObjectId;
}
