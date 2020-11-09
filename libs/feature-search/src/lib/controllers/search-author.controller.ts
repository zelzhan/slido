import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { Search } from '../dtos/search.dto';
import { AuthorSearchService } from '../services/search-author.service';

@ApiTags('search')
@Controller('search/author')
export class SearchAuthorController {
  constructor(private service: AuthorSearchService) {}

  @Get()
  async create(@Query() { search }: Search) {
    return this.service.search(search);
  }
}
