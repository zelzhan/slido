import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FeatureBookModule } from '@slido/feature-book';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/slido'),
    FeatureBookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
