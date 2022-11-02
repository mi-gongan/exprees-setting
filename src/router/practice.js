import * as practiceController from '../controller/practice.js';
import express from 'express';

const router = express.Router();

router.get('/', practiceController.getPractice);

router.post('/', practiceController.postPractice);

router.put('/:id', practiceController.putPractice);

router.delete('/:id', practiceController.deletePractice);

export default router;
