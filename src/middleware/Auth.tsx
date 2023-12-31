import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string | undefined = req.header("Authorization");
    if (!token)
      return res.status(400).json({ msg: "Invalid Authentication" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err: any, user: any) => {
      if (err)
        return res
          .status(400)
          .json({ msg: "Invalid Authentication" });

    //   req.user = user;
      next();
    });
  } catch (error :any) {
    return res.status(500).json({ msg: error.message });
  }
};

export default auth;
