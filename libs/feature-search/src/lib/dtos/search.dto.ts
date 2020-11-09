import { ApiProperty } from '@nestjs/swagger';

export class Search {
  @ApiProperty()
  search: string;
}
