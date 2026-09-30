import GridPattern from "@/components/core/grid-pattern";
import Navbar from "@/components/core/navbar";
import type React from "react";
import { Suspense } from "react";
import { CourseCard } from "../(view)/_home/sections/discover";
import { dataset } from "@/lib/data/data";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-dvh lg:h-dvh lg:max-h-dvh bg-secondary px-[5dvw] overflow-hidden">
      <GridPattern />
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <div className="grid grid-cols-2 h-full w-full pt-24">
        <section className="flex flex-col items-center justify-center h-full gap-4">
          <div className="">
            <h1 className="text-lg font-semibold text-background">
              Sign up and come in
            </h1>
            <p className="text-background mt-4">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center pt-12">
            <div className="relative">
              <Image
                src="/illustration/donut.png"
                alt="Illustration"
                height={300}
                width={300}
                className="absolute -left-24 top-24 size-48 z-40 motion-translate-y-loop-[25px] motion-delay-300 drop-shadow-2xl motion-duration-[5s] motion-ease-in-out"
              />
              <Image
                src="/illustration/donut.png"
                alt="Illustration"
                height={300}
                width={300}
                className="absolute -left-24 top-24 size-48 z-40 motion-translate-y-loop-[25px] motion-delay-300 drop-shadow-2xl motion-duration-[5s] motion-ease-in-out"
              />
              <Image
                src="/illustration/pyramid-3.png"
                alt="Illustration"
                height={300}
                width={300}
                className="absolute -left-24 bottom-0 size-48 z-40 motion-translate-y-loop-[25px] motion-delay-300 drop-shadow-2xl motion-duration-[5s] motion-ease-in-out"
              />

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
        <section className="flex items-center justify-center h-full">
          {children}
        </section>
      </div>
    </main>
  );
}
