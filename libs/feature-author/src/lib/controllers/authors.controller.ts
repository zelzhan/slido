import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CreateAuthorDTO } from '../dtos/create-author.dto';
import { AuthorsService } from '../services/authors.service';
import { ObjectId } from 'mongodb';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('author')
@Controller('author')
export class AuthorsController {
  constructor(private service: AuthorsService) {}

  @Post()
  create(@Body() createAuthorDTO: CreateAuthorDTO) {
    return this.service.create(createAuthorDTO);
  }

  @Get('all')
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getAuthor(@Param('id') id: string) {
    return this.service.find(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
