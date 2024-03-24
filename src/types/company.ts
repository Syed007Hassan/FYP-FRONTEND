type Company = {
  companyId: number;
  companyName: string;
  companyEmail: string;
  companyWebsite: string;
  companyProfile: string;
  companyAddress: string;
  companyPhone: number;
};

export type CompanyCount = {
  success: boolean;
  data: number;
};

export type ApplicationCount = {
  success: boolean;
  data: {
    [key: string]: number;
  };
};

type JobApplication = {
  jobId: number;
  jobTitle: string;
  applications: number;
};

export type ApplicationsInLastFiveJobs = {
  success: boolean;
  data: JobApplication[];
};

export default Company;
