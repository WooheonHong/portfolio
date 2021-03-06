export interface templateProps {
  index: number;
}

export interface PAGES_INFO_TYPE {
  [index: string]: PAGE_INFO_TYPE;
}

export interface PAGE_INFO_TYPE {
  fontColor: string;
  backgroundColor: string;
}

export interface CareerInfoType {
  date: string;
  info: string;
  link?: string;
}

export interface ProjectInfoType {
  date: string;
  info: string;
  link: string;
  title: string;
  organization: string;
}
