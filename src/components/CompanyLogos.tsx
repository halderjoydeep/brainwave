import { companyLogo } from "@/assets";
import Image from "next/image";

export default function CompanyLogos() {
  return (
    <div className="relative z-1 mt-20 hidden lg:block">
      <h5 className="tagline mb-6 text-center text-n-1/50">
        HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
      </h5>
      <ul className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <li
            key={index}
            className="flex h-[8.5rem] flex-1 items-center justify-center"
          >
            <Image
              src={companyLogo}
              alt="Company Logo"
              width={134}
              height={28}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
