import { IUser, IAuth } from "../types";
import User from "../model/UserModel";
import generateToken from "../utils/generateToken";

export default {
  async createUser({ name, email, password, isAdmin }: IUser) {
    const user = await User.findOne({ email });
    if (user) throw new Error("User Already Registered");
    const createUser = await User.create({
      name,
      email,
      password,
      isAdmin,
    });
    return createUser;
  },

  async loginUser({ email, password }: IAuth) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User is not exist");
    const isMatched = await user.comparePassword(password);
    if (!isMatched) throw new Error("Password mismatch");
    const token = await generateToken(user._id);
    return { user, token };
  },
};
