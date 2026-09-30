"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MenuIcon } from "lucide-react";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(0);

  const isMobile = useIsMobile();
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    // Set initial values after the component has mounted.
    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const dirty = scrollY > height || path !== "/";
  const minify = path.includes("/auth");

  return (
    <nav
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out",
        dirty && !minify ? "bg-secondary h-14" : "h-23",
      )}
    >
      <div className="w-full h-full flex justify-between items-center px-[5dvw]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icon.svg"
            alt="Icon"
            width={48}
            height={48}
            className={cn(
              "hover:opacity-70 mb-2 lg:mb-3",
              dirty ? "size-6" : "size-8",
            )}
          />

          <h1
            className={cn(
              "font-clash-display font-bold text-background leading-0 tracking-wider",
              dirty ? "text-sm" : "text-xl",
            )}
          >
            {!minify && "ByteSpace"}
          </h1>
        </Link>

        <div
          className={cn("flex items-center", (minify || isMobile) && "hidden")}
        >
          <Button variant="ghost" className="text-background" asChild>
            <Link href="/auth/signin">Sign In</Link>
          </Button>

          <Button variant="ghost" className="text-background" asChild>
            <Link href="/auth/signup">Join Us</Link>
          </Button>

          <Button size="icon" className="p-0 text-background" variant="ghost">
            <MdOutlineShoppingBag className="size-4" />
          </Button>
        </div>

        {isMobile && !minify && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-background" size="icon">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-secondary border-l-0! text-background">
              <SheetHeader>
                <SheetTitle className="font-clash-display text-background! text-lg mt-3 px-6">
                  ByteSpace
                </SheetTitle>
              </SheetHeader>

              <div className="flex justify-start flex-col items-center p-6 pt-0">
                {navs.map((nav) => (
                  <Button
                    key={nav.href}
                    variant="ghost"
                    className="text-background w-full justify-start"
                    asChild
                  >
                    <Link href={nav.href}>{nav.label}</Link>
                  </Button>
                ))}

                <div className="mt-6 grid grid-cols-2 gap-6 w-full">
                  <Button variant="ghost" asChild>
                    <Link href="/auth/signin">Sign In</Link>
                  </Button>

                  <Button asChild>
                    <Link href="/auth/signup">Join Us</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>

      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center gap-4 pointer-events-none",
          (minify || isMobile) && "hidden",
        )}
      >
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
