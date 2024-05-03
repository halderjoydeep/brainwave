import { cn } from "@/lib/utils";
import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }: { crossesOffset?: string }) => {
  return (
    <>
      <PlusSvg
        className={cn(
          "pointer-events-none absolute -top-[0.3125rem] left-[1.5625rem] hidden lg:block xl:left-[2.1875rem]",
          crossesOffset,
        )}
      />

      <PlusSvg
        className={cn(
          "pointer-events-none absolute -top-[0.3125rem] right-[1.5625rem] hidden lg:block xl:right-[2.1875rem]",
          crossesOffset,
        )}
      />
    </>
  );
};

export default SectionSvg;
