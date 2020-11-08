import { Test } from '@nestjs/testing';
import { BooksController } from '../controllers/books.controller';
import { BooksService } from './books.service';
import { Book } from 'libs/schemas/book.schema';
import { Types } from 'mongoose';
import { ObjectId } from 'mongodb';
import { getModelToken } from '@nestjs/mongoose';
import { CreateBookDTO } from '../dtos/create-book.dto';

describe('book service', () => {
  let booksController: BooksController;
  let booksService: BooksService;
  let books: Book[];

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        BooksService,
        {
          provide: getModelToken('book'),
          useValue: {},
        },
      ],
    }).compile();

    booksService = moduleRef.get<BooksService>(BooksService);
    booksController = moduleRef.get<BooksController>(BooksController);

    books = [
      {
        name: 'Sherlok',
        isbn: 123345,
        author: Types.ObjectId(),
      },
      {
        name: 'Julianna',
        isbn: 1231345,
        author: Types.ObjectId(),
      },
      {
        name: 'Some book',
        isbn: 123351245,
        author: Types.ObjectId(),
      },
    ];
  });

  describe('findAll', () => {
    it('should return an array of books', async () => {
      jest
        .spyOn(booksService, 'findAll')
        .mockImplementation(() => Promise.resolve(books));

      expect(await booksController.getAll()).toBe(books);
    });
  });

  describe('create', () => {
    it('should create the book', async () => {
      const book: CreateBookDTO = {
        name: 'some name',
        isbn: 12345,
        author: new ObjectId(),
      };

      jest
        .spyOn(booksService, 'create')
        .mockImplementation(() => Promise.resolve(books[0]));

      await booksController.create(book);

      expect(booksService.create).toHaveBeenCalledWith(book);
    });
  });
});
