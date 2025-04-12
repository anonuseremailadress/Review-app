import { format } from "date-fns";

export const formatDate = (input: string | Date): string => {
  const date = typeof input === "string" ? new Date(input) : input;
  return format(date, "dd MMM yyyy");
};
