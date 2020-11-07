import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../../../apps/book-management/src/app/app.module';
import * as mongoose from 'mongoose';
import { CreateAuthorDTO } from '../dtos/create-author.dto';
import { assert } from 'console';
import { Types } from 'mongoose';

describe('E2E Tests for NOTE Endpoints', () => {
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

  it('/POST author', () => {
    const author: CreateAuthorDTO = {
      firstName: 'Elzhanik',
      lastName: 'Zeinulla',
    };
    request(app.getHttpServer())
      .post('/author')
      .set('Accept', 'application/json')
      .send(author)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => (id = body._id));
  });

  it('/GET all authors', () => {
    return request(app.getHttpServer())
      .get(`/author`)
      .expect(HttpStatus.OK)
      .then(({ body }) => {
        assert(body.some((author) => author.id === id));
      });
  });

  it('/DELETE author by id', () => {
    return request(app.getHttpServer())
      .delete(`/author/${id}`)
      .expect(HttpStatus.OK);
  });
});
