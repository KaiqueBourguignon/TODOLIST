import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodosController } from "./controller/todos.controller";
import { Todos } from "./entities/todos.entity";
import { TodosService } from "./services/todos.service";

@Module({
    imports:[TypeOrmModule.forFeature([Todos])],
    providers:[TodosService],
    controllers: [TodosController],
    exports: [TypeOrmModule]

})
export class TodosModules {}