import company from "./company";

type Recruiter = {
  recruiterId: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  designation: string;
  company: company;
};

export type ApiResponse = {
  success: boolean;
  data: Recruiter[];
};
export default Recruiter;
