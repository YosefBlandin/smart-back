import { Request, Response } from 'express';
import { db } from '../../../../config/db';

export const PostCreateExpenseController = async (
    request: Request,
    response: Response
) => {
    try {
        const body = request.body;
        console.log(body);
        const insertData = await db.any(
            `INSERT INTO expense (expense_name, expense_amount, created_at, updated_at) VALUES ('${body.expense_name}', '${body.expense_amount}', NOW(), NOW()) RETURNING *`
        );

        console.log(insertData);
        response.json(insertData);
    } catch (e) {
        console.error(e);
    }
};
