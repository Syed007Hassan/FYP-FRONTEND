import Company from "./company";
import Recruiter from "./recruiter";

export type Job = {
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
  jobSkills: string[];
  restrictedLocationRange: string;
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

export type addJobResponse = {
  success: boolean;
  data: Job;
}

export type SingleJobResponse = {
  success: boolean;
  data: Job;
};

export type JobApplication = {
  jobTitle: string;
  jobLocation: JobLocation;
  jobSkills: string[];
  applicationStatus: string;
  applicationDate: string;
  applicationFeedback: string;
  applicationRating: string;
  stageName: string;
  stageCategory: string;
}

export type JobApplicationResponse =  {
  success: boolean;
  data: JobApplication[];
}

export default Job;
