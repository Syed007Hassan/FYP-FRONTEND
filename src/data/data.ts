import image from "../../public/job.png";
import { StaticImageData } from "next/image";

export interface Job {
  id: number;
  companyId: number;
  image: StaticImageData;
  title: string;
  experience: string;
  qualification: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  urgency: string;
  category: string;
  desc: string;
}

export interface Stage {
  id: number;
  name: string;
  category: string;
}

export interface Workflow {
  id: number;
  companyId: number;
  stages: Stage[];
}

export interface User {
  id: number;
  name: string;
  companyId: number;
}

export interface Assignee {
  userId: number;
  stageId: number;
  userName: string;
  workflowId: number;
}

export interface Applicant {
  id: number;
  jobId: number;
  companyId: number;
  userId: number;
  name: string;
  status: string;
  stageId: number;
}

export const job_list: Job[] = [
  {
    id: 1,
    companyId: 1,
    image: image,
    title: "Frontend Developer",
    experience: "2 - 3 Years",
    qualification: "B.Tech",
    company: "Google",
    location: "New York",
    salary: "$120k - $140k",
    type: "Full Time",
    urgency: "urgent",
    category: "IT",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Quam, quibusdam. Quam, quibusdam.",
  },
];

export const workflow: Workflow[] = [
  {
    id: 2,
    companyId: 1,
    stages: [
      {
        id: 1,
        name: "Meeting",
        category: "Interview",
      },
      {
        id: 2,
        name: "Coding",
        category: "Test",
      },
      {
        id: 3,
        name: "Hiring",
        category: "Interview",
      },
    ],
  },
];

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    companyId: 1,
  },
  {
    id: 2,
    name: "Harris Rauf",
    companyId: 1,
  },
  {
    id: 3,
    name: "Babar Azam",
    companyId: 1,
  },
];

export const assignee: Assignee[] = [
  {
    userId: 100,
    userName: "John Doe",
    stageId: 100,
    workflowId: 100,
  }
];

export const applicants: Applicant[] = [
  {
    id: 1,
    jobId: 1,
    companyId: 1,
    userId: 1,
    name: "Aliyan Iqbal",
    status: "Applied",
    stageId: 1,
  },
  {
    id: 2,
    jobId: 1,
    companyId: 1,
    userId: 2,
    name: "Rafay Farrukh",
    status: "Applied",
    stageId: 1,
  },
  {
    id: 3,
    jobId: 1,
    companyId: 1,
    userId: 3,
    name: "Furqan Fazal",
    status: "Applied",
    stageId: 1,
  },
  {
    id: 4,
    jobId: 1,
    companyId: 1,
    userId: 4,
    name: "Harris Rauf",
    status: "Applied",
    stageId: 1,
  },
  {
    id: 5,
    jobId: 1,
    companyId: 1,
    userId: 5,
    name: "Babar Azam",
    status: "Applied",
    stageId: 1,
  },
  {
    id: 6,
    jobId: 10,
    companyId: 1,
    userId: 6,
    name: "Babar Azam",
    status: "Applied",
    stageId: 1,
  },
];