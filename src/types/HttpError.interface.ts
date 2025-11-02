import z from "zod";

export default interface HttpError {
  status: "error";
  error: {
    message: string;
    code?: string | number;
    details?: string | z.ZodError;
  };
}
