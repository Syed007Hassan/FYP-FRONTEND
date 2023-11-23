import image from '../../public/job.png';
import { StaticImageData } from 'next/image';


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

export const job_list: Job[] = [
  {
    id: 1,
    companyId: 1,
    image: image,
    title: 'Frontend Developer',
    experience: '2 - 3 Years',
    qualification: 'B.Tech',
    company: 'Google',
    location: 'New York',
    salary: '$120k - $140k',
    type: 'Full Time',
    urgency: "urgent",
    category: 'IT',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Quam, quibusdam. Quam, quibusdam.',
  }
];

export const workflow: Workflow[] = [
  {
    id: 2,
    companyId: 1,
    stages: [
      {
        id: 1,
        name: 'Meeting',
        category: 'Interview',
      },
      {
        id: 2,
        name: 'Coding',
        category: 'Test',
      },
      {
        id: 3,
        name: 'Hiring',
        category: 'Interview',
      },
    ]
  }
];