import React from "react";
import { SocialData } from "@/app/data/textData";
import SocialMediaIcon from "./SocialMediaIcon";

function SocialMedia() {
  return (
    <div className="flex gap-14">
      {SocialData?.map((value) => {
        return (
          <SocialMediaIcon
            key={value.platform}
            platform={value.platform}
            link={value.link}
          />
        );
      })}
    </div>
  );
}

export default SocialMedia;
