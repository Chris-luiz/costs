import mysql, { RowDataPacket } from 'mysql2';
import { Query } from 'mysql2/typings/mysql/lib/protocol/sequences/Query';

interface IServicos extends RowDataPacket {
    id: number;
    projeto_pk: number;
    nome: string;
    cost: number;
    description: string;
}

interface IProjeto extends RowDataPacket {
    id: number;
    nome: string;
    budget: number;
    category: number;
    services: IServicos[]
}

export class DbConnection {

    private connection: mysql.Connection;

    get conn() {
        return this.connection;
    }

    set conn(conn: mysql.Connection) {
        this.connection = conn;
    }

    constructor(connection: any) {
        this.connection = mysql.createConnection(connection);
    };

    public openConnection(): void {
        try {
            this.connection.connect();
        } catch (e: any) {
            console.log('=============');
            console.log(e.message);
        }
    }

    public closeConnection(): void {
        this.connection.end();
    }

    public async getAllFrom(table: string) {
        try {
            return await new Promise<IProjeto[]>((resolve, reject) => {
                this.connection.query<IProjeto[]>("SELECT * FROM projetos", (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });
        } catch (error) {
            throw new Error(`Erro ao obter os dados: ${error}`);
        }
    }

    public async getById(table: string) {
        try {
            const projetos = await new Promise<IProjeto[]>((resolve, reject) => {
                this.connection.query<IProjeto[]>("SELECT * FROM projetos", (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });

            const services = await new Promise<IServicos[]>((resolve, reject) => {
                this.connection.query<IServicos[]>(`SELECT * FROM services WHERE projeto_pk = ${projetos[0].id}`, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });

            const finalValue: IProjeto = { ...projetos[0], services };
            return finalValue;
        } catch (error) {
            throw new Error(`Erro ao obter os dados: ${error}`);
        }
    }

};
