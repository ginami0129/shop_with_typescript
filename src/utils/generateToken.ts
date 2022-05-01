import jwt from "jsonwebtoken";
import { IToken } from "../types";

const generateToken = ({ id }: IToken) => {
  return jwt.sign({ id }, `${process.env.JWT_SECRET}`, {
    expiresIn: "30d",
  });
};

export default generateToken;
