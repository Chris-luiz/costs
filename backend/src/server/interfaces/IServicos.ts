import { RowDataPacket } from "mysql2";

export interface IServicos extends RowDataPacket {
    id: number;
    projeto_pk: number;
    name: string;
    budget: number;
    description: string;
}