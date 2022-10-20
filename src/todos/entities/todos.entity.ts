import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity ({name: "Tb_todos"})
export class Todos {

    @PrimaryGeneratedColumn ()
    id: number;

    @IsNotEmpty()
    @Column ({length: 200, nullable: false})
    todos_name: string;
    
    @IsNotEmpty()
    @Column ({nullable: false})
    caixa_todo: boolean;
}
