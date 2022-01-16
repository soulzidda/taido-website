interface InstructorData {
  name: string;
  image: string;
  about: string;
  instructors: string[];
  education: string[];
  national: string[];
  otherMartialArts: string[];
  grade: GradeData;
  awards: string[];
  DomoLicenseInTaido: string[];
}

interface GradeData {
  text: string;
  info: string[];
}

export type { InstructorData };
