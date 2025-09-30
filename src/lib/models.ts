export default interface JobListing {
  id: number;
  title: string;
  description: string;
  department: string;
  location: string;
  employmentType: string;
  salary: string;
  qualifications: string[];
  skills: string[];
  tags: string[];
  status: "Open" | "Closed" | "Paused";
  postedDate: string;
  applicationDeadline: string;
  created_at: string;
}
