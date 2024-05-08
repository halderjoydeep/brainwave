import {
  file02,
  homeSmile,
  image2,
  image3,
  image4,
  plusSquare,
  searchMd,
} from "@/assets";

export const navigation = [
  {
    id: "1",
    title: "Features",
    href: "#features",
  },
  {
    id: "2",
    title: "Pricing",
    href: "#pricing",
  },

  {
    id: "3",
    title: "How to use",
    href: "#how-to-use",
  },
  {
    id: "4",
    title: "Roadmap",
    href: "#roadmap",
  },
  {
    id: "5",
    title: "New account",
    href: "#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    href: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
export const notificationAvatars = [image2, image3, image4];
