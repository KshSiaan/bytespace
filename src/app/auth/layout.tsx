import GridPattern from "@/components/core/grid-pattern";
import Navbar from "@/components/core/navbar";
import type React from "react";
import { Suspense } from "react";
import { CourseCard } from "../(view)/_home/sections/discover";
import { avatars, dataset } from "@/lib/data/data";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import Info from "./info";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative lg:min-h-dvh lg:h-dvh lg:max-h-dvh bg-secondary px-[5dvw] overflow-hidden py-6 lg:py-0">
      <GridPattern />
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <div className="grid lg:grid-cols-2 h-full w-full ">
        <section className="flex flex-col items-center justify-center h-full gap-4 pt-12 lg:pt-24!  ">
          <div className="mb-6 lg:mb-0">
            <Suspense fallback={null}>
              <Info />
            </Suspense>
          </div>
          <div className="flex-1 w-full justify-center pt-12 hidden lg:flex">
            <div className="relative">
              <Image
                src="/illustration/donut.png"
                alt="Illustration"
                height={300}
                width={300}
                className="absolute -left-24 top-24 size-48 z-40 motion-translate-y-loop-[25px] motion-delay-300 drop-shadow-2xl motion-duration-[5s] motion-ease-in-out"
              />
              <Image
                src="/illustration/spring-2.png"
                alt="Illustration"
                height={300}
                width={300}
                className="absolute -right-24 bottom-34 size-48 z-40 motion-translate-y-loop-[25px] motion-delay-300 drop-shadow-2xl motion-duration-[5s] motion-ease-in-out"
              />
              <Image
                src="/illustration/pyramid-3.png"
                alt="Illustration"
                height={300}
                width={300}
                className="absolute -left-24 bottom-0 size-48 z-40 motion-translate-y-loop-[25px] motion-delay-300 drop-shadow-2xl motion-duration-[5s] motion-ease-in-out"
              />

              <div className="rounded-xl absolute bottom-1/8 z-30 space-y-1 p-4 -right-1/5 bg-primary motion-preset-fade-lg motion-delay-1500 drop-shadow-2xl">
                <h3 className="font-medium">Happy Students</h3>
                <div className="text-xs text-foreground/60 font-medium flex items-center justify-start gap-1 mt-1">
                  <span>4.5</span>
                  <span>(240)</span>
                  <StarIcon
                    fill="currentColor"
                    className="size-3 text-primary"
                  />
                </div>
                <div className="">
                  <AvatarGroup>
                    {avatars.slice(0, 6).map((src) => (
                      <Avatar key={src} className="w-8 h-8">
                        <AvatarImage src={src} />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                    ))}
                    <AvatarGroupCount className="font-semibold bg-foreground text-background text-xs">
                      2k+
                    </AvatarGroupCount>
                  </AvatarGroup>
                </div>
              </div>

              <CourseCard
                item={dataset[Math.floor(Math.random() * dataset.length)]}
                className="relative w-[30dvw] lg:w-[24dvw] z-20 motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-500  motion-duration-[5s] motion-ease-in-out"
              />
              <CourseCard
                item={dataset[Math.floor(Math.random() * dataset.length)]}
                className="absolute -left-24 top-24 w-[30dvw] lg:w-[24dvw] z-10 motion-translate-y-loop-[25px] drop-shadow-2xl  motion-duration-[5s] motion-ease-in-out"
              />
            </div>
          </div>
        </section>
        <section className="flex items-center justify-start h-full z-50">
          <Suspense fallback={null}>{children}</Suspense>
        </section>
      </div>
    </main>
  );
}
