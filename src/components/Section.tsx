import { cn } from "@/lib/utils";
import SectionSvg from "./SVG/SectionSvg";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className: string;
  crosses?: boolean;
  crossesOffset?: string;
}

const Section = ({
  id,
  children,
  className,
  crosses,
  crossesOffset,
}: SectionProps) => {
  return (
    <div
      id={id}
      className={cn(
        "relative py-10 lg:py-16 xl:py-20",
        { "lg:py-32 xl:py-40": crosses },
        className,
      )}
    >
      {children}

      <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:left-7.5 xl:left-10" />
      <div className="pointer-events-none absolute right-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={cn(
              "pointer-events-none absolute left-7.5 right-7.5 top-0 hidden h-0.25 bg-stroke-1 lg:block xl:left-10 xl:right-10",
              crossesOffset,
            )}
          />
          <SectionSvg />
        </>
      )}
    </div>
  );
};

export default Section;
