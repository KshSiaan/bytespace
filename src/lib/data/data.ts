import {
  Music2,
  Paintbrush,
  Megaphone,
  Clapperboard,
  Share2,
  PanelsTopLeft,
  Lightbulb,
  PenTool,
  Video,
  Scissors,
  BriefcaseBusiness,
  Palette,
  Camera,
  ListChecks,
  Code2,
  Database,
  ChefHat,
} from "lucide-react";

const baseCourse = {
  rating: 4.5,
  creator: "purepearl studio",
  level: "Beginner",
  price: 25,
  lessons: 17,
  minutes: 136,
  comments: 59,
};

export const categories = [
  { name: "Music", icon: Music2 },
  { name: "Drawing & Painting", icon: Paintbrush },
  { name: "Marketing", icon: Megaphone },
  { name: "Animation", icon: Clapperboard },
  { name: "Social Media", icon: Share2 },
  { name: "UI/UX Design", icon: PanelsTopLeft },
  { name: "Creative Marketing", icon: Lightbulb },
  { name: "Digital Illustration", icon: PenTool },
  { name: "Film & Video", icon: Video },
  { name: "Crafts", icon: Scissors },
  { name: "Freelance & Entrepreneurship", icon: BriefcaseBusiness },
  { name: "Graphic Design", icon: Palette },
  { name: "Photography", icon: Camera },
  { name: "Productivity", icon: ListChecks },
  { name: "Web Development", icon: Code2 },
  { name: "Data Science", icon: Database },
  { name: "Cooking", icon: ChefHat },
];

export const dataset = [
  {
    ...baseCourse,
    id: 1,
    title: "Learn Figma from Basic",
    image: "/img/temp/1.webp",
    type: [
      "UI/UX Design",
      "Graphic Design",
      "Digital Illustration",
      "Web Development",
    ],
  },
  {
    ...baseCourse,
    id: 2,
    title: "Build Digital Assets",
    image: "/img/temp/2.webp",
    type: [
      "Graphic Design",
      "Digital Illustration",
      "Creative Marketing",
      "Marketing",
    ],
  },
  {
    ...baseCourse,
    id: 3,
    title: "The Power of Big Data",
    image: "/img/temp/3.webp",
    type: ["Data Science", "Productivity", "Web Development"],
  },
  {
    ...baseCourse,
    id: 4,
    title: "Balancing Productivity and Self-Care",
    image: "/img/temp/4.webp",
    type: ["Productivity"],
  },
  {
    ...baseCourse,
    id: 5,
    title: "Mastering Money Management",
    image: "/img/temp/5.webp",
    type: ["Freelance & Entrepreneurship", "Marketing", "Productivity"],
  },
  {
    ...baseCourse,
    id: 6,
    title: "From Idea to Startup Success",
    image: "/img/temp/6.webp",
    type: ["Freelance & Entrepreneurship", "Marketing", "Creative Marketing"],
  },
  {
    ...baseCourse,
    id: 7,
    title: "Get Started with Data Science",
    image: "/img/temp/7.webp",
    type: ["Data Science"],
  },
];

export const avatars = [
  "https://reloop.b-cdn.net/avatars/28095df1-f824-4762-9426-98a9beffea50.png",
  "https://reloop.b-cdn.net/avatars/a53b5e74-7d21-4e21-b8a1-db7121873a76.png",
  "https://reloop.b-cdn.net/avatars/6a448046-b636-4cb6-a779-8212bf86d831.png",
  "https://reloop.b-cdn.net/avatars/4e74aa39-baab-41dd-87a3-3fa6420215be.png",
  "https://reloop.b-cdn.net/avatars/55db630c-8499-45b1-b28a-58be87cbd585.png",
  "https://reloop.b-cdn.net/avatars/41f7c9e3-9078-466e-b325-97975f632e45.png",
];

export const logoCloud = [
  "/logo/Frame.svg",
  "/logo/Frame-1.svg",
  "/logo/Frame-2.svg",
  "/logo/Frame-3.svg",
  "/logo/Frame-4.svg",
];
