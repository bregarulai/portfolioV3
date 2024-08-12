import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "./ui/magic-button";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="w-full mb-[100px] md:mb-10 pb-10">
      <div className="w-full absolute left-0 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-center text-white-200 my-5 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:flaviolaquino@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-16">
        <p className="text-sm md:text-base font-light md:font-normal">
          Copyright © {new Date().getFullYear()} Flavio Aquino
        </p>
        <div className="flex items-center gap-6 md:gap-3 mt-4 md:mt-0">
          {socialMedia.map((item) => (
            <a
              href={item.link}
              target={"_blank"}
              rel="noopener noreferrer"
              key={item.id}
              className="w-10 h-10 cursor-pointer flex items-center
              justify-center rounded-lg border border-black-300 backdrop-filter
              backdrop-blur-lg saturate-200 bg-opacity-75 bg-black-200
              hover:bg-opacity-100 transition duration-200 hover:bg-black-300 relative"
            >
              <Image
                src={item.img}
                alt={item.name}
                height={20}
                width={20}
                className="object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
