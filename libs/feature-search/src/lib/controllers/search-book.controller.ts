import { Controller, Get, Query } from '@nestjs/common';
import { Search } from '../dtos/search.dto';
import { BooksSearchService } from '../services/search-book.service';

@Controller('search/book')
export class SearchBookController {
  constructor(private service: BooksSearchService) {}

  @Get()
  async create(@Query() { search }: Search) {
    return this.service.search(search);
  }
}
