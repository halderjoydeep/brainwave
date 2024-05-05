import { curve, heroBackground, robot } from "@/assets";
import Image from "next/image";
import Generating from "./Generating";
import Section from "./Section";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <Section
      id="hero"
      crosses
      className="-mt-[5.25rem] pt-[12rem]"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative">
        {/* Intro */}
        <div className="relative z-1 mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="relative inline-block">
              Brainwave{" "}
              <Image
                src={curve}
                alt="Curve"
                className="absolute left-0 top-full w-full xl:-mt-2"
              />
            </span>
          </h1>
          <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" variant="white">
            Get Started
          </Button>
        </div>

        {/* Illustration */}
        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
          {/* Canvas */}
          <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
            {/* Inner canvas */}
            <div className="relative rounded-2xl bg-n-8">
              {/* Top gray bar */}
              <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10" />

              {/* Image Canvas */}
              <div className="aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={robot}
                  className="w-full translate-y-[8%] scale-[1.7] md:-translate-y-[10%] md:scale-[1] lg:-translate-y-[23%]"
                  alt="AI"
                />

                <Generating className="absolute bottom-5 left-4 right-4 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />
              </div>
            </div>

            {/* Gradient */}
          </div>

          {/* Hero Background */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              src={heroBackground}
              alt="Hero Background"
              className="w-full"
            />
          </div>

          {/* Background Circles */}
        </div>

        {/* Company Logos */}
      </div>
    </Section>
  );
}
