import { Request, Response } from 'express';
import { db } from '../../../../config/db';

export const DeleteExpenseController = async (
    request: Request,
    response: Response
) => {
    try {
        const entityId = request.params.id;
        const data = await db.any(
            `DELETE FROM expense WHERE id=${entityId};`
        );
        console.log(data);
        response.json(data);
    } catch (e) {
        console.error(e);
    }
};
