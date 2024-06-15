import { Injectable } from "@nestjs/common";
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

  getAllTodos() {
    return this.prisma.todo.findMany({
      orderBy: { id: "asc" },
      select,
    });
  }

  createTodo(data: Prisma.TodoCreateInput) {
    return this.prisma.todo.create({ data, select });
  }

  updateTodoById(params: {
    where: Prisma.TodoWhereUniqueInput;
    data: Prisma.TodoUpdateInput;
  }) {
    const { where, data } = params;

    return this.prisma.todo.update({ data, where, select });
  }

  deleteTodoById(where: Prisma.TodoWhereUniqueInput) {
    return this.prisma.todo.delete({ where, select });
  }
}
