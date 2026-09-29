"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { cn } from "@/lib/utils";
import { useScrollPosition, useWindowSize } from "react-haiku";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { height } = useWindowSize();
  const [scroll] = useScrollPosition();
  const scrollY = typeof scroll === "object" ? scroll.y : 0;
  const navs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "Creators",
      href: "/creators",
    },
  ];

  const path = usePathname();

  const dirty = scrollY > height || path !== "/";

  return (
    <nav
      className={cn(
        " fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out",
        dirty ? "bg-secondary h-14" : "h-23",
      )}
    >
      <div className="w-full h-full flex justify-between items-center px-[5dvw]">
        <div className="flex items-center gap-2">
          <Image
            src="/icon.svg"
            alt="Icon"
            width={48}
            height={48}
            className={cn("mb-3", dirty ? "size-6" : "size-8")}
          />
          <h1
            className={cn(
              "font-clash-display font-bold text-background leading-0 tracking-wider",
              dirty ? "text-sm" : "text-xl",
            )}
          >
            ByteSpace
          </h1>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" className="text-background">
            Sign In
          </Button>
          <Button variant="ghost" className="text-background">
            Join Us
          </Button>
          <Button size="icon" className="p-0 text-background" variant="ghost">
            <MdOutlineShoppingBag className="size-4" />
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center gap-4 pointer-events-none">
        {navs.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className="text-sm text-background font-medium pointer-events-auto"
          >
            {nav.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
