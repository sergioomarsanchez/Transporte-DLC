import React from "react";
import FacebookIcon from "@/app/assests/icons/FacebookIcon";
import InstagramIcon from "@/app/assests/icons/InstagramIcon";
import clsx from "clsx";

function SocialMediaIcon({
  platform,
  link,
}: {
  platform: string;
  link: string;
}) {
  let icon = <></>;
  switch (platform) {
    case "Facebook":
      icon = <FacebookIcon className="w-5 text-white" />;
      break;
    case "Instagram":
      icon = <InstagramIcon className="w-5 text-white" />;
      break;
    default:
      icon;
      break;
  }
  return (
    <section className="flex justify-center items-center">
      <a
        href={link}
        className={clsx(
          "group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]",
          {
            "bg-[#a21caf]": platform === "Instagram",
            "bg-[#316FF6]": platform === "Facebook",
          }
        )}
      >
        {icon}
        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-8 duration-700">
          {platform}
        </span>
      </a>
    </section>
  );
}

export default SocialMediaIcon;
