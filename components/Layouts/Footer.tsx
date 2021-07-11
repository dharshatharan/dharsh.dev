import { ReactElement } from "react";
import Image from "next/image";
import LISNImage from "@icons/lisn.svg";
import SCESocImage from "@icons/scesoc.svg";
import GithubImage from "@icons/github.svg";
import LinkedinImage from "@icons/linkedin.svg";
import InstagramImage from "@icons/instagram.svg";
import TwitterImage from "@icons/twitter.svg";

export default function Footer(): ReactElement {
  return (
    <div>
      <div className="w-full flex justify-center py-10">
        <div id="socials" className="w-full max-w-7xl flex justify-center">
          <FooterIcon
            link="https://www.lisnclips.app/"
            icon={LISNImage}
            label="Link to LISN"
          />
          <FooterIcon
            link="https://www.scesoc.ca/"
            icon={SCESocImage}
            label="Link to SCESoc"
          />
          <FooterIcon
            link="https://github.com/dharshatharan"
            icon={GithubImage}
            label="Link to my GitHub"
          />
          <FooterIcon
            link="https://www.linkedin.com/in/dharshatharan/"
            icon={LinkedinImage}
            label="Link to my LinkedIn"
          />
          <FooterIcon
            link="https://www.instagram.com/dharshatharan/"
            icon={InstagramImage}
            label="Link to my Instagram"
          />
          <FooterIcon
            link="https://twitter.com/dharshatharan"
            icon={TwitterImage}
            label="Link to my Twitter"
          />
        </div>
      </div>
      <div className="bg-dark-grey w-full flex justify-between p-5 text-off-white font-normal text-xs md:text-base">
        <span>
          Built with{" "}
          <a
            className="underline"
            target="_blank"
            href="https://nextjs.org/"
            rel="noreferrer"
          >
            Next.js
          </a>
        </span>
        <p className="text-right pl-10">
          <span className="inline-block">This website might look simple,</span>
          <span className="inline-block">
            &nbsp;but it involved a lot of overthinking
          </span>
        </p>
      </div>
    </div>
  );
}

interface footerIconProps {
  link: string;
  icon: string;
  label: string;
}

const FooterIcon = ({ link, icon, label }: footerIconProps) => (
  <a
    href={link}
    target="_blank"
    className="h-12 w-12 md:h-14 md:w-14 relative mx-2 md:mx-7"
    rel="noreferrer"
  >
    <Image src={icon} alt={label} layout="fill" objectFit="contain" />
  </a>
);
