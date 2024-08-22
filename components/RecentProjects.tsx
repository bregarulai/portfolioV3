import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-40 item-center">
        {projects.map(({ id, title, des, img, iconLists, link, codeLink }) => (
          <div
            key={id}
            className="lg:min-h-[35.5rem] h-[25rem] md:h-[35rem] flex items-center justify-center lg:w-[36rem] w-[86vw]"
          >
            <PinContainer title={link} href={link} className="mb-6">
              <div className="relative flex items-center justify-center lg:w-[36rem] w-[80vw] overflow-hidden h-[20vh] md:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <Image
                    src={img}
                    alt="cover"
                    className="object-cover object-center rounded-2xl"
                    fill
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3 mr-2">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center relative"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        className="p-2"
                        fill
                        sizes="100%"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <span
                    // href={link}
                    // target={"_blank"}
                    // rel="noopener noreferrer"
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                  >
                    Check Live Site
                  </span>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
