import { RowDataPacket } from "mysql2";
import { IServicos } from "./IServicos";

export interface IProjeto extends RowDataPacket {
    id: number;
    nome: string;
    budget: number;
    category: number;
    services: IServicos[]
}