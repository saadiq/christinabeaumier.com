export interface Strength {
  title: string;
  description: string;
}

export interface Award {
  title: string;
  category?: string;
  year: string;
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  year?: string;
}

export interface Experience {
  company: string;
  location?: string;
  parentCompany?: string;
  roles: {
    title: string;
    period: string;
  }[];
}

export interface PressItem {
  publication: string;
  title: string;
  date: string;
  url: string;
}

export interface PanelItem {
  event: string;
  title: string;
  date: string;
  location?: string;
  role?: string;
  url?: string;
}

export interface InterviewItem {
  title: string;
  source: string;
  date: string;
  url?: string;
}

export interface PresentationItem {
  title: string;
  event: string;
  date: string;
  location?: string;
  url?: string;
}
