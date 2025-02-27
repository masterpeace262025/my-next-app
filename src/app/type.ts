import { StaticImageData } from "next/image";
// Blog interface
export interface IBlog {
  id: number;
  dec: string;
  title: string;
  img: string | StaticImageData;
  postDate: string;
}
// About page interface
export interface IAbout {
  id: number;
  dec: string;
  title: string;
  img: string | StaticImageData;
  subTitle: string;
}
// Navigation interface
export interface INavigation {
  name: string;
  path: string;
  icon?: string | StaticImageData;
}
// Author Button interface
export interface IAuthorBtn {
  author: string;
}
// Quote interface
export interface IQuote {
  id: number;
  quote: string;
  author: string;
}
// Profile interface
export interface IProfile {
  HeaderImage: StaticImageData
}