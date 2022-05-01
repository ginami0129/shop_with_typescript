import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

// export function errorHandler(
//   err: Error,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   console.log("Error--------------------------------------------");
//   if (err instanceof Error) {
//     return res.status(400).json({
//       success: false,
//       error: err.message,
//     });
//   }
//   return res.status(500).json({
//     status: "error",
//     message: "Internal Server Error",
//   });
//   // console.log("ERROR");
//   // const status = err.status || 500;
//   // const message = err.message || "Something went wrong";
//   // res.status(status).json({
//   //   status,
//   //   message,
//   // });
// }
// // export default errorHandler;

// // const errorHandler = (
// //   err: Error,
// //   req: Request,
// //   res: Response,
// //   next: NextFunction
// // ) => {
// //   console.log("error");
// //   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

// //   res.status(statusCode);

// //   res.json({
// //     code: statusCode,
// //     message: err.message,
// //     stack: process.env.NODE_ENV === "production" ? null : err.stack,
// //   });
// // };

// // export { errorHandler };

// import { NextFunction, Request, Response } from "express";

const handleError: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }

  return res
    .status(500)
    .json({ status: "error", message: "Internal Server Error" });
};

export default handleError;
