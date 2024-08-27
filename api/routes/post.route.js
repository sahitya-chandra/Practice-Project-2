import { Router } from "express";

const router = Router();

router.get('/test', (req, res) => {
    res.send("ittt works")
})


export default router;