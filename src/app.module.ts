import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todos } from './todos/entities/todos.entity';
import { TodosModules } from './todos/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_todo',
      entities:[Todos],
      synchronize: true
    }),
    TodosModules
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
