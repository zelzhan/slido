import { ObjectId } from 'mongodb';
import { Transform } from 'class-transformer';
import { Transformers } from '../../../../utils/transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  isbn: number;

  @Transform(Transformers.toObjectId)
  author: ObjectId;
}
