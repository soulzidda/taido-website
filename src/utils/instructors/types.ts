interface InstructorData {
  name: string;
  type?: string;
  image: string;
  about: string;
  instructors: string[];
  education: TextAndInfoData;
  national: string[];
  otherMartialArts?: string[];
  otherEducation?: string[];
  grade?: TextAndInfoData;
  awards?: string[];
  domoLicenseInTaido?: string[];
}

interface TextAndInfoData {
  text: string;
  info: string[];
}

export type { InstructorData };
