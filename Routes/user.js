import express from "express";
import { getUser, createUser, fetchUser, deleteUser, updateUser } from "../Controller/user.js";

const router = express.Router();

router.get('/', getUser);

router.post('/user', createUser);

router.get('/:id', fetchUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;