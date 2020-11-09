import { ObjectId } from 'mongodb';
import { Transform } from 'class-transformer';
import { Transformers } from '../../../../utils/transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDTO {
  @ApiProperty({
    type: String,
  })
  @Transform(Transformers.toObjectId)
  _id: ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty()
  isbn: number;

  @Transform(Transformers.toObjectId)
  author: ObjectId;
}
