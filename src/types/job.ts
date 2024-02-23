import Company from "./company";
import Recruiter from "./recruiter";

type Job = {
  jobId: number;
  jobTitle: string;
  jobDescription: string;
  jobType: string;
  jobCategory: string;
  jobLocation: JobLocation;
  jobSalary: string;
  jobStatus: string;
  jobQualification: string;
  jobUrgency: string;
  jobExperience: string;
  jobCreatedAt: string;
  company: Company;
  recruiter: Recruiter;
};

export interface JobLocation {
  area: string;
  city: string;
  country: string;
  latitude: string;
  longitude: string;
}

export type JobResponse = {
  success: boolean;
  data: Job[];
};

export type SingleJobResponse = {
  success: boolean;
  data: Job;
};

export default Job;
