export type Applicant = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export type Application = {
  applicationId: number;
  status: string;
  applicationDate: string;
  applicant: Applicant;
};

export type ApplicationResponse = {
  success: boolean;
  data: Application[];
};
