import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> resent co-workers</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
          {companies.map(
            ({ id, img, name, nameImg, nameClassName, imgClassName }) => (
              <div
                key={id}
                className="flex items-center max-w-32 md:max-w-60 gap-2"
              >
                <div className={imgClassName}>
                  <Image src={img} alt={name} fill sizes="100%" />
                </div>
                <div className={nameClassName}>
                  <Image src={nameImg} alt={name} fill sizes="100%" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
