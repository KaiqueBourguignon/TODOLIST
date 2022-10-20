import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todos } from "../entities/todos.entity";


@Injectable ()
export class TodosService {

    constructor (
        @InjectRepository(Todos)
        private totosRepository: Repository <Todos>
    
){}
    async findAll(): Promise<Todos[]> {
        return await this.totosRepository.find();
    }

}   