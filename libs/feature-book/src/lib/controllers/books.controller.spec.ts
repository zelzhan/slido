import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../../../apps/book-management/src/app/app.module';
import * as mongoose from 'mongoose';
import { assert } from 'console';
import { Types } from 'mongoose';
import { CreateBookDTO } from '../dtos/create-book.dto';

describe('Integration tests for books feature', () => {
  let app: INestApplication;
  let id: Types.ObjectId;

  beforeEach(async () => {
    jest.setTimeout(10000);
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async (done) => {
    mongoose.disconnect(done);
  });

  it('/POST book', () => {
    const book: CreateBookDTO = {
      name: 'Some book',
      isbn: 123123,
      authors: [Types.ObjectId()],
    };
    request(app.getHttpServer())
      .post('/book')  
      .set('Accept', 'application/json')
      .send(book)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => (id = body._id));
  });

  it('/GET all books', () => {
    return request(app.getHttpServer())
      .get(`/book/all`)
      .expect(HttpStatus.OK)
      .then(({ body }) => {
        assert(body.some((book) => book.id === id));
      });
  });

  it('/DELETE book by id', () => {
    return request(app.getHttpServer())
      .delete(`/book/${id}`)
      .expect(HttpStatus.OK);
  });
});
