class AppError extends Error {
  public status: number;

  constructor(message: string | unknown, status: number) {
    // Ensure message is always a non-empty string
    let finalMessage = "Internal Server Error";

    if (typeof message === "string" && message.trim().length > 0) {
      finalMessage = message.trim();
    } else if (message instanceof Error && message.message.trim().length > 0) {
      finalMessage = message.message.trim();
    } else if (
      typeof message === "object" &&
      message !== null &&
      "message" in message
    ) {
      const objMessage = (message as any).message;
      if (typeof objMessage === "string" && objMessage.trim().length > 0) {
        finalMessage = objMessage.trim();
      }
    }

    super(finalMessage);
    this.status = status;
    this.name = "AppError";

    // Maintains proper stack trace for where our error was thrown
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export default AppError;
