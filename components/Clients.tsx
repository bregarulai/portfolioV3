import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="projects" className="py-20">
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
          {companies.map(({ id, img, name, nameImg, nameClassName }) => (
            <div
              key={id}
              className="flex items-center max-w-32 md:max-w-60 gap-2"
            >
              <div className="size-8 relative block lg:hidden">
                <Image src={img} alt={name} fill />
              </div>
              <div className={nameClassName}>
                <Image src={nameImg} alt={name} fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
