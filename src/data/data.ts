import image from "../../public/job.png";
import { StaticImageData } from "next/image";
import { JobLocation } from "@/types/job";

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

export interface Jobs {
  // image: StaticImageData;
  jobTitle: string;
  jobExperience: string;
  jobQualification: string;
  // company: string;
  jobLocation: JobLocation;
  jobSalary: string;
  jobType: string;
  jobUrgency: string;
  jobCategory: string;
  jobDescription: string;
  jobStatus: string;
}

export type DecodedData = {
  companyId: number;
  email: string;
  exp: number;
  iat: number;
  name: string;
  recruiterId: number;
  role: string;
};

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
    jobId: 12,
    companyId: 1,
    userId: 1,
    name: "Aliyan Iqbal",
    status: "Applied",
    stageId: 1,
  },
  {
    id: 2,
    jobId: 12,
    companyId: 1,
    userId: 2,
    name: "Rafay Farrukh",
    status: "Applied",
    stageId: 1,
  },
  {
    id: 3,
    jobId: 12,
    companyId: 1,
    userId: 3,
    name: "Furqan Fazal",
    status: "Applied",
    stageId: 1,
  },
  {
    id: 4,
    jobId: 12,
    companyId: 1,
    userId: 4,
    name: "Harris Rauf",
    status: "Applied",
    stageId: 1,
  },
  {
    id: 5,
    jobId: 12,
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

// Applicant

export interface JobCardProps {
  jobImage: string;
  jobTitle: string;
  jobCompany: string;
  jobLocation: string;
  jobTimePosted: string;
  jobType: string;
  jobUrgency: string;
  jobCategory: string;
  jobStatus: string;
}

export const JobCardData: JobCardProps[] = [
  {
    jobImage: "/assets/images/featured-job/img-01.png",
    jobTitle: "Frontend Developer",
    jobCompany: "Google",
    jobLocation: "New York",
    jobTimePosted: "3 min ago",
    jobType: "Full Time",
    jobUrgency: "urgent",
    jobCategory: "IT",
    jobStatus: "Applied",
  },
  {
    jobImage: "/assets/images/featured-job/img-02.png",
    jobTitle: "Backend Developer",
    jobCompany: "Google",
    jobLocation: "New York",
    jobTimePosted: "3 min ago",
    jobType: "Full Time",
    jobUrgency: "urgent",
    jobCategory: "IT",
    jobStatus: "Active",
  },
  {
    jobImage: "/assets/images/featured-job/img-03.png",
    jobTitle: "Full Stack Developer",
    jobCompany: "Google",
    jobLocation: "New York",
    jobTimePosted: "3 min ago",
    jobType: "Full Time",
    jobUrgency: "urgent",
    jobCategory: "IT",
    jobStatus: "Rejected",
  },
  {
    jobImage: "/assets/images/featured-job/img-04.png",
    jobTitle: "Frontend Developer",
    jobCompany: "Google",
    jobLocation: "New York",
    jobTimePosted: "3 min ago",
    jobType: "Full Time",
    jobUrgency: "urgent",
    jobCategory: "IT",
    jobStatus: "Applied",
  },
  {
    jobImage: "/assets/images/featured-job/img-05.png",
    jobTitle: "Frontend Developer",
    jobCompany: "Google",
    jobLocation: "New York",
    jobTimePosted: "3 min ago",
    jobType: "Full Time",
    jobUrgency: "urgent",
    jobCategory: "IT",
    jobStatus: "Active",
  },
  {
    jobImage: "/assets/images/featured-job/img-06.png",
    jobTitle: "Frontend Developer",
    jobCompany: "Google",
    jobLocation: "New York",
    jobTimePosted: "3 min ago",
    jobType: "Full Time",
    jobUrgency: "urgent",
    jobCategory: "IT",
    jobStatus: "Rejected",
  },
  {
    jobImage: "/assets/images/featured-job/img-07.png",
    jobTitle: "Frontend Developer",
    jobCompany: "Google",
    jobLocation: "New York",
    jobTimePosted: "3 min ago",
    jobType: "Full Time",
    jobUrgency: "urgent",
    jobCategory: "IT",
    jobStatus: "Applied",
  },
];