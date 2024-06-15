import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v0");
  app.enableCors({
    origin: "http://localhost:3000",
  });
  await app.listen(5555);
}

bootstrap();
