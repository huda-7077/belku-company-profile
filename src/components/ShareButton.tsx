"use client";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
const ShareButton = () => {
  const shareUrl = "www.github.com";
  const title = "ya gatau kok tanya saya";
  return (
    <div className="">
      <div className="flex flex-row">
        <FacebookShareButton url={shareUrl} className="">
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <div>
          <FacebookShareCount url={shareUrl} className="">
            {(count) => count}
          </FacebookShareCount>
        </div>
        <div className="">
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className=""
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </div>

        <div className="">
          <TwitterShareButton url={shareUrl} title={title} className="">
            <XIcon size={32} round />
          </TwitterShareButton>
        </div>

        <div className="">
          <TelegramShareButton url={shareUrl} title={title} className="">
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>

        <div className="">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className=""
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>

        <div className="">
          <LinkedinShareButton url={shareUrl} className="">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareButton;
