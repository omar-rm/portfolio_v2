import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IconType } from "react-icons";
import { SiChakraui } from "react-icons/si";

interface Props {
  techArray: string[];
}

const IconComponent: React.FC<IconTechnologyProps> = ({ techArray }) => {
  const iconMap: { [key: string]: IconType } = {
    react: FaReact,
    typescript: SiTypescript,
    mysql: SiMysql,
    javascript: IoLogoJavascript,
    chakra: SiChakraui,
  };

  // Example list of technologies to render
  // const technologies = ["react", "typescript", "mysql", "javascript"];

  return (
    <div className="flex gap-4">
      {techArray.map((tech) => {
        const IconComponent = iconMap[tech.toLowerCase()];
        return IconComponent ? <IconComponent key={tech} size={30} /> : null;
        <span>{tech}</span>;
      })}
    </div>
  );
};

export default IconComponent;
