import { ObjectId } from 'mongodb';
import { Transform } from 'class-transformer';
import { Transformers } from '../../../../utils/transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDTO {
  @ApiProperty()
  name: string;

  @ApiProperty({
    default: Math.floor(Math.random() * 100000),
  })
  isbn: number;

  @ApiProperty({
    type: String,
    default: new ObjectId(),
  })
  @Transform(Transformers.toObjectId)
  author: ObjectId;
}
