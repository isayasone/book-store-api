import { Injectable } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { Book_Status } from 'src/utilities';
import { PrismaService } from 'src/utilities/prisma.service';

@Injectable()
export class BooksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createBook(params: { data: Prisma.BookCreateInput }): Promise<Book> {
    const { data } = params;
    return await this.prisma.book.create({ data });
  }

  async getBook(whereInput: Prisma.BookWhereUniqueInput): Promise<Book> {
    return await this.prisma.book.findUnique({
      where: whereInput,
      include: { order: { include: { customer: true } } },
    });
  }

  async getBookQuery(whereInput: Prisma.BookWhereInput): Promise<Book[]> {
    return await this.prisma.book.findMany({
      where: whereInput,
      include: { order: { include: { customer: true } } },
    });
  }

  async getBooks(): Promise<Book[]> {
    return await this.prisma.book.findMany();
  }

  async updateBook(params: {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.BookUpdateInput;
  }): Promise<Book> {
    const { where, data } = params;
    return await this.prisma.book.update({ where, data });
  }

  async deleteBook(params: {
    where: Prisma.BookWhereUniqueInput;
  }): Promise<Book> {
    const { where } = params;
    return await this.prisma.book.delete({ where });
  }
  async getBooksByStatus(bookStatus: Book_Status) {
    return await this.prisma.book.findMany({
      where: { status: bookStatus },
      include: { order: { include: { customer: true } } },
    });
  }
}
