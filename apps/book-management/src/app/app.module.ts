import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FeatureBookModule } from '@slido/feature-book';
import { FeatureAuthorModule } from '@slido/feature-author';
import { FeatureSearchModule } from '@slido/feature-search';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/slido'),
    FeatureBookModule,
    FeatureAuthorModule,
    FeatureSearchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
