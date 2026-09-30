import { cn } from "cn";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
    ["Development", "Marketing", "Photography", "Finance", "Sport"],
    ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  ];

  return (
    <footer className="p-12 px-[5dvw] grid grid-cols-5 gap-6 border-t-4 border-muted">
      <div className="flex items-center gap-2 col-span-5">
        <Image
          src="/icon.svg"
          alt="Icon"
          width={48}
          height={48}
          className={cn("mb-3", "size-10")}
        />
        <h1
          className={cn(
            "font-clash-display font-bold text-foreground leading-0 tracking-wider",
            "text-2xl",
          )}
        >
          ByteSpace
        </h1>
      </div>

      <section className="col-span-2 w-full h-full pr-[5dvw]">
        <p>
          Stay Up to date with our latest features and releases by joining our
          newsletter.
        </p>

        <div className="flex items-center gap-6 mt-6">
          <Input
            placeholder="Enter your email"
            className="h-12 px-6 rounded-full"
          />
          {/* Ideal UI UX should say subscribe instead of Search */}
          <Button className="rounded-full h-12 px-6">Subscribe</Button>
        </div>
        <p className="text-sm mt-6 text-muted-foreground">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from our company.
        </p>
      </section>

      {footerLinks.map((links, index) => (
        <section key={links[0]} className="w-full h-full flex flex-col gap-4">
          {links.map((link, linkIndex) => (
            <Link
              href={link.toLocaleLowerCase().replace(/\s+/g, "-")}
              key={link}
            >
              {link}
            </Link>
          ))}
        </section>
      ))}
      <div className="col-span-5 border-t-2 mt-[20dvh] border-foreground/10! py-6 flex justify-between items-center">
        <p>@ 2023 ByteSpace. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
