import { Router } from "express";
import { signUp, signIn } from "../controllers/auth.js";

const router = Router();
router.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.originalUrl}`, req.body);
  next();
});

router.post("/api/signup", signUp);
router.post("/api/signin", signIn);

export default router;
