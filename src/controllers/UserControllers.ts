import { NextFunction, Request, Response } from "express";
import UserServices from "../services/UserServices";

export default {
  // 회원가입
  async RegisterUser(req: Request, res: Response) {
    const { name, email, password, isAdmin } = req.body;

    const newUser = await UserServices.createUser({
      name,
      email,
      password,
      isAdmin,
    });

    res.json(newUser);
  },
  // 로그인
  async Login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const { user, token } = await UserServices.loginUser({ email, password });
    res.json({ user, token });
  },
};
