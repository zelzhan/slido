import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FeatureBookModule } from '@slido/feature-book';
import { FeatureAuthorModule } from '@slido/feature-author';
import { FeatureSearchModule } from '@slido/feature-search';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/slido'),
    FeatureBookModule,
    FeatureAuthorModule,
    FeatureSearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
