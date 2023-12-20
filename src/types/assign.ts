export type Assignee = {
  recruiterId: number;
  name: string;
};

export type newAssignee = {
  assignees: Assignee[];
};

export type Workflow = {
  workflowId: number;
};

export type Stage = {
  stageId: number;
  stageName: string;
  category: string;
  workflow: Workflow;
};

export type ResponseData = {
  assignees: Assignee[];
  stage: Stage;
  stageAssigneeId: number;
};

export type ApiResponse = {
  success: boolean;
  data: ResponseData;
};

export type ApiResponseData = {
  stageAssigneeId: number;
  assignees: Assignee[];
};

export type GetApiResponse = {
  success: boolean;
  data: ApiResponseData;
};
