import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import CustomerIcon from "../assests/icons/CustomerIcon";
import EfficiencyIcon from "../assests/icons/EfficiencyIcon";
import ExpertiseIcon from "../assests/icons/ExpertiseIcon";
import ReliabilityIcon from "../assests/icons/ReliabilityIcon";

function ValueCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const { theme } = useContext(ThemeContext);
  let icon = <></>;
  switch (name) {
    case "Eficiencia":
      icon = <EfficiencyIcon className="h-10 w-10 md:h-20 md:w-20" />;
      break;
    case "Efficiency":
      icon = <EfficiencyIcon className="h-10 w-10 md:h-20 md:w-20" />;
      break;
    case "Confiabilidad":
      icon = <ReliabilityIcon className="h-10 w-10 md:h-20 md:w-20" />;
      break;
    case "Reliability":
      icon = <ReliabilityIcon className="h-10 w-10 md:h-20 md:w-20" />;
      break;
    case "Experiencia":
      icon = <ExpertiseIcon className="h-10 w-10 md:h-20 md:w-20" />;
      break;
    case "Expertise":
      icon = <ExpertiseIcon className="h-10 w-10 md:h-20 md:w-20" />;
      break;
    default:
      icon = <CustomerIcon className="h-10 w-10 md:h-20 md:w-20" />;
      break;
  }
  return (
    <div
      className={`h-[200px] md:h-[300px] max-w-[300px] flex flex-col p-5 border-[0.5px] rounded-lg ${
        theme === "dark" ? "border-yellow-100" : "border-yellow-800"
      }`}
    >
      <header className="flex flex-col gap-2 justify-center items-center">
        {icon}{" "}
        <h3 className="font-bold font-serif my-2 md:my-5 whitespace-nowrap">{name}</h3>
      </header>
      <p className="font-thin italic font-mono text-xs">{description}</p>
    </div>
  );
}

export default ValueCard;
