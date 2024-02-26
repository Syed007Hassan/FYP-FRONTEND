export interface Education {
  degree: string;
  endDate: string;
  startDate: string;
  institution: string;
}

export interface Location {
  area: string;
  city: string;
  country: string;
  latitude: string;
  longitude: string;
}

export interface Experience {
  title: string;
  company: string;
  endDate: string;
  startDate: string;
  description: string;
}

export interface Contact {
  location: Location;
  phoneNo: string;
}

export interface Applicant {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface AboutInfoData {
  aboutMe: string;
  skills: string[];
}

export interface ApplicantDetails {
  applicantDetailsId: number;
  dob: string;
  gender: string;
  profilePicture: string;
  aboutMe: string;
  education: Education[];
  skills: string[];
  location: Location;
  experience: Experience[];
  relocation: boolean;
  resume: string;
  languages: string;
  applicant: Applicant;
  phoneNo: string;
}

export interface CreateApplicantDetails {
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
  profilePicture: string;
  phoneNo: string;
}

export interface ApplicantDetailsApiResponse {
  success: boolean;
  data: ApplicantDetails;
}

export default ApplicantDetails;