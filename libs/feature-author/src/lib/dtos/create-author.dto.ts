import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDTO {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;
}
