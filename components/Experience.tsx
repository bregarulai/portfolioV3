import Image from "next/image";

import { workExperience } from "@/data";
import { Button } from "@/components/ui/moving-border";

const Experience = () => {
  return (
    <section className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {workExperience.map(({ id, title, desc, className, thumbnail }) => (
          <Button
            key={id}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="w-16 md:w-20 lg:w-32 h-16 md:h-20 lg:h-32 relative">
                <Image src={thumbnail} alt={title} fill />
              </div>
              <div className="lg:ms-5">
                <h1 className="font-bold text-xl text-start md:text-2xl">
                  {title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
