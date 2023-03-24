import {Router} from 'express';
import {createStudent, getStudents, getStudentsById, updateStudent, deleteStudent} from '../controllers/students.controller.js';


const router = Router();


router.post('/students', createStudent);
router.get('/students', getStudents);
router.get('/students/:id', getStudentsById);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

export default router;