import ApplicantDetails from "./applicant";
import { Stage } from "./stage";
import { Job } from "./job";

export type Applicant = {
  id: number;
  name: string;
  email: string;
  role: string;
  applicantDetails: ApplicantDetails;
};

export type Application = {
  applicationId: number;
  status: string;
  applicationDate: string;
  job: Job;
  applicant: Applicant;
  stage: Stage;
};

export type ApplicationResponse = {
  success: boolean;
  data: Application[];
};

export type ApplicationData = {
  success: boolean;
  data: {
    applicationId: number;
    status: string;
    applicationDate: string;
    applicant: {
      id: number;
      name: string;
      email: string;
      role: string;
    };
    job: {
      jobId: number;
      jobTitle: string;
      jobDescription: string;
      jobType: string;
      jobCategory: string;
      jobLocation: {
        area: string;
        city: string;
        country: string;
        latitude: string;
        longitude: string;
      };
      jobSalary: string;
      jobStatus: string;
      jobQualification: string;
      jobUrgency: string;
      jobExperience: string;
      jobSkills: null | string;
      jobCreatedAt: string;
    };
    stage: {
      stageId: number;
      stageName: string;
      category: string;
    };
  };
};
