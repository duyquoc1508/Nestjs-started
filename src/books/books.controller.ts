import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { CreateBookDTO } from './dto/create-book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async getBooks() {
    const books = await this.bookService.getBooks();
    return books;
  }

  @Get(':bookID')
  async getBook(@Param('bookID') bookID) {
    const book = await this.bookService.getBook(bookID);
    return book;
  }

  //DTO => data transfer object
  @Post()
  async addBooks(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.bookService.addBook(createBookDTO);
    return book;
  }

  @Delete()
  async deleteBook(@Query() query) {
    const books = await this.bookService.deleteBook(query.bookID);
    return books;
  }
}
