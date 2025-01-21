import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Intro from "@/components/Intro";
import info from "./data/info";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-1">
              Hello I'm
              <br />
              <span className="text-accent">
                {info.name}
                <span className="text-white">,</span>
              </span>
            </h1>
            <div className="text-xl mb-9">
              <Intro />

              <span className="text-center text-md max-w-[500px]  text-white/80">
                {info.description}
              </span>
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/resume/resume.pdf" download="philip-resume.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download my Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base
                  hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home


