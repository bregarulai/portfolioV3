import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";

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
      </div>
    </section>
  );
};

export default Clients;
