import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto px-5 pr-8 sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full">
        <Loading />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
