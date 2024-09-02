import { Router } from "express";
import { deleteUsers, getUser, getUsers, profilePosts, savePost, updateUsers } from "../controller/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.get('/', getUsers)
// router.get('/:id', verifyToken, getUser)
router.put('/:id', verifyToken, updateUsers)
router.delete('/:id', verifyToken, deleteUsers)
router.post('/save', verifyToken, savePost)
router.post('/profilePosts', verifyToken, profilePosts)

export default router