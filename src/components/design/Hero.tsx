import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "@/components/SVG/PlusSvg";

export const BottomLine = () => {
  return (
    <>
      <div className="pointer-events-none absolute left-10 right-10 top-[55.25rem] hidden h-0.25 bg-n-6 xl:block" />

      <PlusSvg className="pointer-events-none absolute left-[2.1875rem] top-[54.9375rem] z-2 hidden xl:block" />

      <PlusSvg className="pointer-events-none absolute right-[2.1875rem] top-[54.9375rem] z-2 hidden xl:block" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 aspect-square w-[65.875rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[51.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[36.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[23.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10" />
    </>
  );
};

export const BackgroundCircles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 aspect-square w-[78rem] -translate-x-1/2 rounded-full border border-n-2/5 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07}>
        <div className="thread origin-bottom rotate-[46deg]">
          <div
            className={`-ml-1 -mt-36 h-2 w-2 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32] transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="thread -rotate-[56deg]">
          <div
            className={`-ml-1 -mt-32 h-4 w-4 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32] transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="thread rotate-[54deg]">
          <div
            className={`transit -ml-1 mt-[12.9rem] hidden h-4 w-4 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] transition-transform duration-500 ease-out xl:block ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="thread -rotate-[65deg]">
          <div
            className={`-ml-1.5 mt-52 h-3 w-3 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="thread -rotate-[85deg]">
          <div
            className={`-ml-3 -mt-3 h-6 w-6 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="thread rotate-[70deg]">
          <div
            className={`-ml-3 -mt-3 h-6 w-6 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
