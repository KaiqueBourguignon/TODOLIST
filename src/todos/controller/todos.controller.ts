import { Controller, HttpCode, HttpStatus, Get } from "@nestjs/common";
import { Todos } from "../entities/todos.entity";
import { TodosService } from "../services/todos.service";

@Controller("/todos")
export class TodosController{
    constructor(private readonly todosService:TodosService){ }
    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Todos[]>{
        return this.todosService.findAll();
    }
}