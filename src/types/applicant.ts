interface Education {
  degree: string;
  endDate: string;
  startDate: string;
  institution: string;
}

interface Location {
  area: string;
  city: string;
  country: string;
  latitude: string;
  longitude: string;
}

interface Experience {
  title: string;
  company: string;
  endDate: string;
  startDate: string;
  description: string;
}

interface Applicant {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

interface ApplicantDetails {
  applicantDetailsId: number;
  dob: string;
  gender: string;
  aboutMe: string;
  education: Education[];
  skills: string[];
  location: Location;
  experience: Experience[];
  relocation: boolean;
  resume: string;
  languages: string;
  applicant: Applicant;
}

export interface ApplicantDetailsApiResponse {
  success: boolean;
  data: ApplicantDetails;
}

export default ApplicantDetails;