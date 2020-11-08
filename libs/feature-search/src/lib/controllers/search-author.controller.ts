import { Controller, Get, Query } from '@nestjs/common';
import { Search } from '../dtos/search.dto';
import { AuthorSearchService } from '../services/search-author.service';

@Controller('search/author')
export class SearchAuthorController {
  constructor(private service: AuthorSearchService) {}

  @Get()
  async create(@Query() { search }: Search) {
    return this.service.search(search);
  }
}
