import { StaticImageData } from "next/image";

export interface ProjectType {
  id: number;
  name: string;
  description: string;
  techs: string[];
  repo: string;
  site: string;
  image: StaticImageData;
}
