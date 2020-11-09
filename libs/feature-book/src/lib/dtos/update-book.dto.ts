import { ObjectId } from 'mongodb';
import { Transform } from 'class-transformer';
import { Transformers } from '../../../../utils/transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDTO {
  @ApiProperty()
  name: string;

  @ApiProperty({
    default: Math.floor(Math.random() * 100000)
  })
  isbn: number;

  @ApiProperty({
    type: String
  })
  @Transform(Transformers.toObjectId)
  authorId: ObjectId;
}
