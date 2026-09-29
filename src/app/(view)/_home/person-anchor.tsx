import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { StarIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
export default function PersonAnchor() {
  return (
    <section className="absolute bottom-0 z-20 flex h-[50dvh] w-full items-end justify-center lg:w-1/2">
      <Image
        src="/img/person.webp"
        alt="Person"
        width={400}
        height={400}
        className="h-full w-auto max-w-none z-30 object-contain object-bottom motion-translate-y-in-100 motion-opacity-in-10 motion-delay-1000 drop-shadow-2xl"
      />

      <div className="rounded-xl absolute bg-background top-1/3 p-4 left-[27%] scale-75 -translate-x-1/2 motion-preset-fade-lg motion-delay-1500 z-10 drop-shadow-2xl">
        <h3 className="font-medium">UI/UX Design</h3>
        <div className="text-xs text-foreground/50 font-medium space-x-2">
          <span>200 Courses</span>
          <span>•</span>
          <span>1000+ Students</span>
        </div>
      </div>
      <div className="rounded-xl absolute bg-background top-1/3 w-50 space-y-2 p-4 right-1/8 motion-preset-fade-lg motion-delay-1500 z-10 drop-shadow-2xl">
        <h3 className="font-medium">Learning Progress</h3>
        <div className="text-3xl font-bold text-foreground">55%</div>
        <Progress value={55} />
      </div>
      <div className="rounded-xl absolute bg-background bottom-1/6 z-30 space-y-1  p-4 left-1/4 -translate-x-1/2 motion-preset-fade-lg motion-delay-1500 drop-shadow-2xl">
        <h3 className="font-medium">Happy Students</h3>
        <div className="text-xs text-foreground/50 font-medium flex items-center justify-start gap-1 mt-1">
          <span>4.5</span>
          <span>(240)</span>
          <StarIcon fill="currentColor" className="size-3 text-primary" />
        </div>
        <div className="">
          <AvatarGroup>
            {[
              "https://reloop.b-cdn.net/avatars/28095df1-f824-4762-9426-98a9beffea50.png",
              "https://reloop.b-cdn.net/avatars/a53b5e74-7d21-4e21-b8a1-db7121873a76.png",
              "https://reloop.b-cdn.net/avatars/6a448046-b636-4cb6-a779-8212bf86d831.png",
              "https://reloop.b-cdn.net/avatars/4e74aa39-baab-41dd-87a3-3fa6420215be.png",
              "https://reloop.b-cdn.net/avatars/55db630c-8499-45b1-b28a-58be87cbd585.png",
              "https://reloop.b-cdn.net/avatars/41f7c9e3-9078-466e-b325-97975f632e45.png",
            ].map((src) => (
              <Avatar key={src} className="w-8 h-8">
                <AvatarImage src={src} />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount className="font-semibold bg-primary text-xs">
              2k+
            </AvatarGroupCount>
          </AvatarGroup>
        </div>
      </div>
    </section>
  );
}
