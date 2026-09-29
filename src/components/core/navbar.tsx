import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";

// Developer botlesi
//* Jehetu main page just landing page rakha hoise, im keeping it in SSR, CSR e move korle aro interactive kora jabe judging by usePathname. but no point putting extra load time.

export default function Navbar() {
  return (
    <nav className="h-23  absolute w-full top-0 left-0 z-50 bg-transparent ">
      <div className="w-full h-full flex justify-between items-center px-[5dvw]">
        <div className="flex items-center gap-2">
          <Image
            src="/icon.svg"
            alt="Icon"
            width={48}
            height={48}
            className="size-8 mb-3"
          />
          <h1 className="font-clash-display text-xl font-bold text-background leading-0 tracking-wider">
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-min flex items-center gap-4 h-full">
        <span className="text-sm text-background font-bold mb-2 ">Home</span>
        <Link href="/courses" className="text-sm text-background font-medium">
          Courses
        </Link>
        <Link href="/creators" className="text-sm text-background font-medium">
          Creators
        </Link>
      </div>
    </nav>
  );
}
