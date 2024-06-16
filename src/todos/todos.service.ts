import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";

const select = {
  id: true,
  title: true,
  finished: true,
};

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly logger = new Logger(TodosService.name);

  getAllTodos() {
    this.logger.log("Getting all todos...");

    return this.prisma.todo.findMany({
      orderBy: { id: "asc" },
      select,
    });
  }

  createTodo(data: Prisma.TodoCreateInput) {
    this.logger.log("Creating todo...");

    return this.prisma.todo.create({ data, select });
  }

  updateTodoById(params: {
    where: Prisma.TodoWhereUniqueInput;
    data: Prisma.TodoUpdateInput;
  }) {
    this.logger.log("Updating todo...");

    const { where, data } = params;

    return this.prisma.todo.update({ data, where, select });
  }

  deleteTodoById(where: Prisma.TodoWhereUniqueInput) {
    this.logger.log("Deleting todo...");

    return this.prisma.todo.delete({ where, select });
  }
}
