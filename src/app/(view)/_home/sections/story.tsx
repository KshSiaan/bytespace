import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";

export default function Story() {
  return (
    <>
      <section className="h-[80dvh] border-b grid grid-cols-2 gap-4">
        <div className=""></div>
        <div className=" flex flex-col justify-end items-center relative">
          <Image
            src="/img/person.webp"
            alt="Person"
            width={1200}
            height={1200}
            className="h-[60dvh] w-auto max-w-none z-30 object-contain object-bottom motion-translate-y-in-100 motion-opacity-in-10 motion-delay-1000 drop-shadow-2xl"
          />
          <div className="rounded-xl absolute bg-background top-3/6 scale-150 z-30 w-50 space-y-2 p-4 right-1/7 motion-preset-fade-lg motion-delay-1500 drop-shadow-2xl">
            <h3 className="font-medium">Learning Progress</h3>
            <div className="text-3xl font-bold text-foreground">55%</div>
            <Progress value={55} />
          </div>
        </div>
      </section>
      <section className="h-[80dvh]">Story</section>
    </>
  );
}
