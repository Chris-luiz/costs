import { DbConnection } from "../db/Db";
import { IProjeto } from "../interfaces/IProjetos";
import { IServicos } from "../interfaces/IServicos";

export class Projetos {

    async getAll() {

        const sql = "SELECT * FROM projetos";

        const dbConnection = new DbConnection({
            host: process.env.HOST,
            user: 'root',
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        });

        try {
            return await new Promise<IProjeto[]>((resolve, reject) => {
                dbConnection.conn.query<IProjeto[]>(sql, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });
        } catch (error) {
            throw new Error(`Erro ao obter os dados: ${error}`);
        }
    }

    async getById(id: string) {

        const sql = `SELECT * FROM projetos WHERE id=${id}`;

        const dbConnection = new DbConnection({
            host: process.env.HOST,
            user: 'root',
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        });

        try {
            const projetos = await new Promise<IProjeto[]>((resolve, reject) => {
                dbConnection.conn.query<IProjeto[]>(sql, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });

            const services = await new Promise<IServicos[]>((resolve, reject) => {
                dbConnection.conn.query<IServicos[]>(`SELECT * FROM services WHERE projeto_pk = ${projetos[0].id}`, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });

            return { ...projetos[0], services };

        } catch (error) {
            throw new Error(`Erro ao obter os dados: ${error}`);
        }
    }

    async create(projeto: IProjeto) {

        const { name, budget, category } = projeto;

        const sql = `INSERT INTO projetos (name, budget, category) values ('${name}', ${budget}, '${category}')`

        const dbConnection = new DbConnection({
            host: process.env.HOST,
            user: 'root',
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        });

        try {
            return await new Promise<IProjeto[]>((resolve, reject) => {
                dbConnection.conn.query<IProjeto[]>(sql, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });
        } catch (error) {
            throw new Error(`Erro ao obter os dados: ${error}`);
        }
    }

    async update(projeto: IProjeto) {

        const { id, name, budget, category } = projeto;

        const sql = `UPDATE projetos SET name='${name}', budget=${budget}, category='${category}' WHERE id=${id}`;

        const dbConnection = new DbConnection({
            host: process.env.HOST,
            user: 'root',
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        });

        try {
            return await new Promise<IProjeto[]>((resolve, reject) => {
                dbConnection.conn.query<IProjeto[]>(sql, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });
        } catch (error) {
            throw new Error(`Erro ao obter os dados: ${error}`);
        }
    }

    async delete(id: number) {

        const sql = `DELETE FROM projetos WHERE id = ${id}`;

        const dbConnection = new DbConnection({
            host: process.env.HOST,
            user: 'root',
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        });

        try {
            return await new Promise<IProjeto[]>((resolve, reject) => {
                dbConnection.conn.query<IProjeto[]>(sql, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });
        } catch (error) {
            throw new Error(`Erro ao obter os dados: ${error}`);
        }
    }
}