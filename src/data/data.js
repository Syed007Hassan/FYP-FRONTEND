import image from '../../public/job.png';

export const job_list = [
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
        urgency: "urgent" ,
        category: 'IT',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Quam, quibusdam. Quam, quibusdam.',
    }
];

export const workflow = [
    {
        id: 2,
        companyId: 1,
        stages : [
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
