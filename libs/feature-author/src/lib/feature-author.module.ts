import { Module } from '@nestjs/common';
import { AuthorSchema } from 'libs/schemas/author.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsController } from './controllers/authors.controller';
import { AuthorsService } from './services/authors.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'author', schema: AuthorSchema }]),
  ],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class FeatureAuthorModule {}
