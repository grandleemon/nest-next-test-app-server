import { IsBoolean, IsString } from "class-validator";

export class UpdateTodoDto {
  @IsString()
  title: string;

  @IsBoolean()
  finished: boolean;
}
