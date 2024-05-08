import { image1 } from "@/assets";
import { notificationAvatars } from "@/constants";
import Image from "next/image";

export default function Notification() {
  return (
    <div className="absolute -right-[5.5rem] bottom-[11rem] hidden w-[18rem] items-center gap-5 rounded-2xl border border-n-1/10 bg-n-9/40 p-4 pr-6 backdrop-blur xl:flex">
      <Image
        src={image1}
        alt="Notification"
        className="rounded-xl"
        width={62}
        height={62}
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold">Code generation</h6>
        <div className="flex items-center justify-between">
          <ul className="-mr-0.5 flex items-center">
            {notificationAvatars.map((avatar, index) => (
              <li
                key={index}
                className="flex h-6 w-6 overflow-hidden rounded-full border-2 border-n-12"
              >
                <Image src={avatar} alt="Avatar" className="w-full" />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
}
