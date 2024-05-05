import { loading } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Generating = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-[3.5rem] items-center rounded-full bg-n-8/80 px-6 text-base",
        className,
      )}
    >
      <Image src={loading} alt="Loading" className="mr-4 h-5 w-5" />
      AI is generating
    </div>
  );
};

export default Generating;
