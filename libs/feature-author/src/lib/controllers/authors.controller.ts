import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateAuthorDTO } from '../dtos/create-author.dto';
import { AuthorsService } from '../services/authors.service';
import { ObjectId } from 'mongodb';

@Controller('author')
export class AuthorsController {
  constructor(private service: AuthorsService) {}

  @Post()
  create(@Body() createAuthorDTO: CreateAuthorDTO) {
    return this.service.create(createAuthorDTO);
  }

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getAuthor(@Param('id') id: ObjectId) {   
    return this.service.find(id);
  }
}