import { projects } from "@/data";
// import PinCard from "./PinCard";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <section className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-32 mt-40">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="h-full flex items-center justify-center w-[20rem] mb-40 md:mb-32"
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
              className="mb-10"
            >
              <div className="relative flex items-center justify-center overflow-hidden mb-10 w-[30rem] md:w-[25rem] h-full">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" fill />
                </div>

                <div className="h-80 md:h-64 w-96">
                  {/* TODO: get Stock Images for the project */}
                  <Image
                    src={img}
                    alt="cover"
                    className="z-10 object-cover"
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
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
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
