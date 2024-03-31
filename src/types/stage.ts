export type Stage = {
  stageName: string;
  category: string;
  stageId: number;
};

export type newStage = {
  stages: createStage[];
};

export type createStage = {
    stageName: string;
    category: string;
    description: string;
};

export type Job = {
  jobId: number;
  jobTitle: string;
  jobDescription: string;
  jobType: string;
  jobCategory: string;
  jobLocation: string;
  jobSalary: string;
  jobStatus: string;
  jobQualification: string;
  jobUrgency: string;
  jobExperience: string;
  jobCreatedAt: string;
};

export type ResponseData = {
  stages: Stage[];
  job: Job;
  workflowId: number;
};

export type ApiResponse = {
  success: boolean;
  data: ResponseData[];
};
