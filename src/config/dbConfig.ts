import mongoose from "mongoose";

export default async () => {
  try {
    console.log("database");
    const conn = await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log("database is connected!");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
