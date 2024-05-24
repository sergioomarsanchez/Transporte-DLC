import React, { useRef } from "react";
import { SocialData } from "@/app/data/textData";
import SocialMediaIcon from "./SocialMediaIcon";
import WhatsappButton from "./WhatsappButton";

function SocialMedia({ footerVisible }: { footerVisible: boolean }) {
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
      <WhatsappButton key={"whatsapp"} footerVisible={footerVisible} />
    </div>
  );
}

export default SocialMedia;
