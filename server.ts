import dotenv from 'dotenv';
dotenv.config();
import app from 'express';
import ExpenseRoutes from './app/expenses/routes';
import { db } from './config/db';

const server = app();

server.use('/expense', ExpenseRoutes);

server.use(app.json());

db.connect()
    .then((response: any) => console.log('DB Connection Successfully'))
    .catch((error: any) => console.error('ERROR', error.message));

server.listen(3200, () => {
    console.log('Listening');
});
