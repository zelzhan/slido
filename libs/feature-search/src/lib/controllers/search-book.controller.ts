import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { Search } from '../dtos/search.dto';
import { BooksSearchService } from '../services/search-book.service';

@ApiTags('search')
@Controller('search/book')
export class SearchBookController {
  constructor(private service: BooksSearchService) {}

  @Get()
  async create(@Query() { search }: Search) {
    return this.service.search(search);
  }
}
