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
import { logoCloud } from "@/lib/data/data";
import DiscoverMore from "./_home/sections/discover-more";
import Story from "./_home/sections/story";
import JoinBanner from "./_home/sections/join-banner";
import Testimonial from "./_home/sections/testimonial";
import React from "react";

const homeComponents = [
  <React.Fragment key="discover-section">
    <Suspense fallback={<div className="h-[50dvh] w-full bg-muted" />}>
      <Discover />,
    </Suspense>
  </React.Fragment>,
  <DiscoverMore key="discover-more" />,
  <Story key={"story-section"} />,
  <JoinBanner key={"join-banner"} />,
  <Testimonial key={"testimonial"} />,
];

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
        {logoCloud.map((src) => (
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
        {homeComponents.map((component) => (
          <React.Fragment key={component.key}>{component}</React.Fragment>
        ))}
      </main>
    </>
  );
}
