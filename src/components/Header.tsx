"use client";

import { brainwave } from "@/assets";
import { navigation } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "./SVG/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { Button } from "./ui/Button";

export default function Header() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [hash, setHash] = useState("");

  const params = useSearchParams();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
    enablePageScroll();
  };

  useEffect(() => {
    if (typeof window) {
      setHash(window.location.hash);
    }
  }, [params]);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm",
        {
          "bg-n-8": openNavigation,
          "bg-n-8/90 backdrop-blur-sm": !openNavigation,
        },
      )}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <Link href="#hero" className="block w-[12rem] xl:mr-8">
          <Image src={brainwave} alt="brainwave" priority />
        </Link>

        <nav
          className={cn(
            "fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent",
            {
              flex: openNavigation,
              hidden: !openNavigation,
            },
          )}
        >
          <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleClick}
                className={cn(
                  "relative block px-6 py-6 font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:text-n-1/50 lg:hover:text-n-1 xl:px-12 ",
                  {
                    "lg:hidden": item.onlyMobile,
                    "lg:text-n-1": hash === item.href,
                  },
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <Link
          href="#signup"
          className="mr-8 hidden font-code text-xs font-bold uppercase tracking-wider text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </Link>

        <Button href="#login" className="hidden lg:flex">
          Sign in
        </Button>

        <Button className="ml-auto px-3 lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
}
