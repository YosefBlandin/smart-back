import { Request, Response } from 'express';
import { db } from '../../../../config/db';

export const GetExpenseController = async (
    request: Request,
    response: Response
) => {
    try {
        const data = await db.any('SELECT * FROM expense;');
        console.log(data);
        response.json(data);
    } catch (e) {
        console.error(e);
    }
};
