import { Controller, Get, Query } from '@nestjs/common';
import { Search } from '../dtos/Search.dto';

@Controller('search/author')
export class SearchAuthorController {
  constructor(private service: AuthorSearchService) {}

  @Get()
  async create(@Query() { search }: Search) {
    return this.service.search(search);
  }
}
