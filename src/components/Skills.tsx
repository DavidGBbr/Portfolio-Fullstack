import Image from "next/image";
import React from "react";
import HtmlImage from "@/assets/skills/html.svg";
import CssImage from "@/assets/skills/css.svg";
import JsImage from "@/assets/skills/javascript.svg";
import TsImage from "@/assets/skills/typescript.svg";
import ReactImage from "@/assets/skills/react.svg";
import ReactNativeImage from "@/assets/skills/reactnative.svg";
import NextImage from "@/assets/skills/next.svg";
import NodeImage from "@/assets/skills/node.svg";
import ExpressImage from "@/assets/skills/express.svg";
import MysqlImage from "@/assets/skills/mysql.svg";
import PostgreImage from "@/assets/skills/postgresql.svg";
import FirebaseImage from "@/assets/skills/firebase.svg";
import MongoImage from "@/assets/skills/mongodb.svg";
import SequelizeImage from "@/assets/skills/sequelize.svg";
import PrismaImage from "@/assets/skills/prisma.svg";
import TailwindImage from "@/assets/skills/tailwindcss.svg";
import StyledImage from "@/assets/skills/styledcomponents.svg";
import ReduxImage from "@/assets/skills/redux.svg";
import JestImage from "@/assets/skills/jest.svg";

const Skills = () => {
  const skillsImages: SkillType[] = [
    { id: 1, image: HtmlImage, label: "HTML" },
    { id: 2, image: CssImage, label: "CSS" },
    { id: 3, image: JsImage, label: "JavaScript" },
    { id: 4, image: TsImage, label: "TypeScript" },
    { id: 5, image: ReactImage, label: "React" },
    { id: 6, image: ReactNativeImage, label: "React Native" },
    { id: 7, image: NextImage, label: "NextJS" },
    { id: 8, image: NodeImage, label: "NodeJS" },
    { id: 9, image: ExpressImage, label: "Express" },
    { id: 10, image: MysqlImage, label: "MySQL" },
    { id: 11, image: PostgreImage, label: "PostgreSQL" },
    { id: 12, image: FirebaseImage, label: "Firebase" },
    { id: 13, image: MongoImage, label: "MongoDB" },
    { id: 14, image: SequelizeImage, label: "Sequelize" },
    { id: 15, image: PrismaImage, label: "Prisma" },
    { id: 16, image: TailwindImage, label: "TailwindCSS" },
    { id: 17, image: StyledImage, label: "Styled Components" },
    { id: 18, image: ReduxImage, label: "Redux" },
    { id: 19, image: JestImage, label: "Jest" },
  ];

  return (
    <section id="skills" className="min-h-screen w-full">
      <div className="max-w-screen-lg p-4 py-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h3 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-green-400">
            Minhas Skills
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
          {skillsImages.map(({ id, image, label }) => (
            <div
              key={id}
              className="bg-[#171717] rounded-lg shadow-md shadow-green-700 p-4 hover:scale-105 duration-300 cursor-pointer flex flex-col justify-center items-center"
            >
              <Image src={image} alt={label} className="w-20" />
              <div className="p-2">
                <h3 className="text-xl font-semibold h-fit">{label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
