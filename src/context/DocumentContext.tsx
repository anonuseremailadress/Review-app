export interface Document {
  id: string;
  name: string;
  reference: string;
  date: string;
  uploader: string;
  status: "Pending" | "Sent for Approval" | "Approved" | "Rejected";
}
