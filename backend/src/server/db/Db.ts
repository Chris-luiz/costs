import mysql from 'mysql2';

export class DbConnection {

    constructor(connection: any) {
        this.connection = mysql.createConnection(connection);
    };

    private connection: mysql.Connection;

    get conn() {
        return this.connection;
    }

    set conn(conn: mysql.Connection) {
        this.connection = conn;
    }

    public openConnection(): void {
        try {
            this.connection.connect();
        } catch (e: any) {
            console.log(e.message);
        }
    }

    public closeConnection(): void {
        this.connection.end();
    }
};
