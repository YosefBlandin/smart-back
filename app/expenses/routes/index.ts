import app from 'express';
import {
    GetExpenseController,
    PostCreateExpenseController,
} from '../controllers';

const router = app.Router();

router.use(app.json());

router.get('/', GetExpenseController);
router.post('/create', PostCreateExpenseController);

export default router;
