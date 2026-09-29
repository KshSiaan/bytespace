import GridPattern from "@/components/core/grid-pattern";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Suspense } from "react";
import { MdSearch } from "react-icons/md";
import Circle from "./_home/circle";
import PersonAnchor from "./_home/person-anchor";
import ExternalElements from "./_home/extenral-elements";
import Image from "next/image";
import Discover from "./_home/sections/discover";
export default function Page() {
  return (
    <>
      <header className="bg-secondary h-dvh w-full relative overflow-hidden">
        <GridPattern />
        <div className="px-[5dvw] h-full w-full pt-28 flex flex-col items-center justify-bottom gap-8 z-40!">
          <h1 className="text-2xl lg:text-[4rem] xl:text-[4rem] font-bold text-background text-center">
            Get Access to Hundreds <br />
            Courses Available
          </h1>
          <span className="text-lg text-center w-full text-background">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </span>
          <div className=" w-2/5 flex items-center gap-2">
            <InputGroup className="bg-background rounded-full h-12">
              <InputGroupInput
                className="text-base! font-medium placeholder:text-foreground/50 "
                placeholder="Course, topic, creator"
              />
              <InputGroupAddon className="ml-2" align="inline-start">
                <MdSearch className="size-5 text-foreground/50" />
              </InputGroupAddon>
            </InputGroup>
            <Button className="rounded-full h-12 px-6 font-semibold text-base cursor-pointer! z-10">
              Search
            </Button>
          </div>
          <PersonAnchor />
          <ExternalElements />
          <Suspense
            fallback={
              <div className="bg-primary w-full lg:w-4/7 absolute bottom-0 translate-y-2/3 aspect-square rounded-full shadow-xl z-0" />
            }
          >
            <Circle />
          </Suspense>
        </div>
      </header>
      <section className="py-18 bg-muted grid grid-cols-5 gap-[8%] px-[7dvw]">
        {[
          "/logo/Frame.svg",
          "/logo/Frame-1.svg",
          "/logo/Frame-2.svg",
          "/logo/Frame-3.svg",
          "/logo/Frame-4.svg",
        ].map((src) => (
          <Image
            key={src}
            src={src}
            alt="Logo"
            width={400}
            height={100}
            className="mx-auto mb-8 object-contain hover:scale-105 transition-transform duration-300"
          />
        ))}
      </section>
      <main>
        <Suspense fallback={<div className="h-[50dvh] w-full bg-muted" />}>
          <Discover />
        </Suspense>
      </main>
    </>
  );
}
