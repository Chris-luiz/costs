import mysql from 'mysql2';

export class DbConnection {

    public connection: mysql.Connection;

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

    public getAllFrom(table: string) {
        this.connection.query(`SELECT * FROM costs.${table}`, (error, result, fields) => {
            if (error) throw error;
            console.log(result);
            return result;
        })
    };
};