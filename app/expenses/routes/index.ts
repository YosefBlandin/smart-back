import app from 'express';
import {
    DeleteExpenseController,
    GetExpenseController,
    PostCreateExpenseController,
} from '../controllers';

const router = app.Router();

router.use(app.json());

router.get('/', GetExpenseController);
router.delete('/:id', DeleteExpenseController);
router.post('/create', PostCreateExpenseController);

export default router;
