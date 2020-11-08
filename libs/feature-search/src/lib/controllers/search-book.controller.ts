import { Controller, Get, Query } from '@nestjs/common';
import { Search } from '../dtos/Search.dto';

@Controller('search/book')
export class SearchBookController {
  constructor(private service: BookSearchService) {}

  @Get()
  async create(@Query() { search }: Search) {
    return this.service.search(search);
  }
}
