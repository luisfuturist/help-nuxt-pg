
import pg from 'pg'
const { Client } = pg

const db = new Client({
    user: 'user',
    host: 'localhost',
    database: 'mydatabase',
    password: 'password',
    port: 5432,
});

db.connect();

export default db
