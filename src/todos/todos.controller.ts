import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { TodosService } from "./todos.service";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller({
  path: "todos",
})
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAllTodos() {
    return this.todosService.getAllTodos();
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.createTodo(createTodoDto);
  }

  @Put(":id")
  updateTodoById(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.updateTodoById({
      where: { id },
      data: updateTodoDto,
    });
  }

  @Delete(":id")
  deleteTodoById(@Param("id", ParseIntPipe) id: number) {
    return this.todosService.deleteTodoById({ id });
  }
}
