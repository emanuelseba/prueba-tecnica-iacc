import {Router} from 'express';
import {createCareer, getCareers, getStudentsByCareer} from '../controllers/careers.controller.js';


const router = Router();


router.get('/careers', getCareers);
router.get('/careers/:id/students', getStudentsByCareer);
router.post('/careers', createCareer);

export default router;