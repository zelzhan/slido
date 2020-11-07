import { Test } from '@nestjs/testing';
import { AuthorsController } from '../controllers/authors.controller';
import { AuthorsService } from './authors.service';
import { Author } from 'libs/schemas/author.schema';
import { getModelToken } from '@nestjs/mongoose';
import { CreateAuthorDTO } from '../dtos/create-author.dto';

describe('AuthorsController', () => {
  let booksController: AuthorsController;
  let authorsService: AuthorsService;
  let authors: Author[];

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AuthorsController],
      providers: [
        AuthorsService,
        {
          provide: getModelToken('author'),
          useValue: {},
        },
      ],
    }).compile();

    authorsService = moduleRef.get<AuthorsService>(AuthorsService);
    booksController = moduleRef.get<AuthorsController>(AuthorsController);

    authors = [
      {
        firstName: 'Arthur',
        lastName: 'Doyle',
      },
      {
        firstName: 'Elzhan',
        lastName: 'Zeinulla',
      },
      {
        firstName: 'Elon',
        lastName: 'Musk',
      },
    ];
  });

  describe('findAll', () => {
    it('should return an array of authors', async () => {
      jest
        .spyOn(authorsService, 'findAll')
        .mockImplementation(() => Promise.resolve(authors));

      expect(await booksController.getAll()).toBe(authors);
    });
  });

  describe('create', () => {
    it('should create the author', async () => {
      const author: CreateAuthorDTO = {
        firstName: 'Test',
        lastName: 'Test2',
      };

      jest
        .spyOn(authorsService, 'create')
        .mockImplementation(() => Promise.resolve(authors[0]));

      await booksController.create(author);

      expect(authorsService.create).toHaveBeenCalledWith(author);
    });
  });
});
