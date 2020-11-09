import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateBookDTO } from '../dtos/create-book.dto';
import { BooksService } from '../services/books.service';
import { ObjectId } from 'mongodb';
import { UpdateBookDTO } from '../dtos/update-book.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('book')
@Controller('book')
export class BooksController {
  constructor(private service: BooksService) {}

  @Post()
  create(@Body() createBookDTO: CreateBookDTO) {
    return this.service.create(createBookDTO);
  }

  @Get('all')
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getBook(@Param('id') id: string) {
    return this.service.find(id);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updateBookDTO: UpdateBookDTO) {
    return this.service.update(id, updateBookDTO);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
