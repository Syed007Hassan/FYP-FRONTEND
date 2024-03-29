import company from "./company";
import { Stage } from "./stage";

type Recruiter = {
  recruiterId: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  designation: string;
  company: company;
} | null;

export type ApiResponse = {
  success: boolean;
  data: Recruiter[];
};
export type UpdateRecruiter = {
  recruiterId: string;
  employeeId: string;
  temp_data: {
    name: string;
    email: string;
    password: string;
    phone: string;
    designation: string;
  };
};

export type AllStagesAssigned = {
  jobId: number;
  jobTitle: string;
  stages: Stage[];
};

export type StageResponse = {
  success: boolean;
  data: AllStagesAssigned[];
};

export default Recruiter;
