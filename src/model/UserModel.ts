import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    const passwordHash = await bcrypt.hash(this.password, 10);
    this.password = passwordHash;
    next();
  } catch (error: any) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (inputPassword: string) {
  const isMatched = await bcrypt.compare(inputPassword, this.password);
  return isMatched;
};

const User = mongoose.model("User", userSchema);

export default User;
