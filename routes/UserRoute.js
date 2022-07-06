import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/siswa', getUsers);
router.get('/siswa/:id', getUserById);
router.post('/siswa', createUser);
router.patch('/siswa/:id', updateUser);
router.delete('/siswa/:id', deleteUser);

export default router;