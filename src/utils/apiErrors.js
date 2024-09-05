function createApiError(
  statusCode,
  message = "Something went wrong",
  errors = [],
  stack = ""
) {
  const error = new Error(message);

  return Object.assign(error, {
    statusCode,
    data: null,
    message,
    success: false,
    errors,
    stack: stack || error.stack,
  });
}

export { createApiError };

// class ApiError extends Error {
//   constructor(
//     statusCode,
//     message = "Something went wrong",
//     errors = [],
//     statck = ""
//   ) {
//     super(message);
//     (this.statusCode = statusCode),
//       (this.data = null),
//       (this.message = message),
//       (this.success = false),
//       (this.errors = errors);

//     if (statck) {
//       this.stack = statck;
//     } else {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }

// export { ApiError };
