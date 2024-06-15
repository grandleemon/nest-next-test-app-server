import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller("todos")
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAllTodos() {
    return this.todosService.getAllTodos();
  }

  @Post()
  createTodo(@Body() todoData: { title: string }) {
    return this.todosService.createTodo(todoData);
  }

  @Put(":id")
  updateTodoById(
    @Param("id") id: string,
    @Body() todoData: { title: string; finished: boolean },
  ) {
    return this.todosService.updateTodoById({
      where: { id: Number(id) },
      data: todoData,
    });
  }

  @Delete(":id")
  deleteTodoById(@Param("id") id: string) {
    return this.todosService.deleteTodoById({ id: Number(id) });
  }
}
