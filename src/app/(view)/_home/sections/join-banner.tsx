import GridPattern from "@/components/core/grid-pattern";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function JoinBanner() {
  return (
    <section className="h-[60dvh] w-full bg-secondary overflow-hidden flex flex-col items-center justify-center gap-6 px-[5dvw] text-background relative">
      <GridPattern />
      <h2 className="text-2xl lg:text-[2.5rem] xl:text-[3rem] font-bold text-center">
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className="text-lg text-center w-4/5 mx-auto ">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there's
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>
      <Button size="lg" className="rounded-full z-40">
        Join as a Creator
      </Button>

      {/* ELEMENTS */}

      <Image
        src="/illustration/spring-3.png"
        height={600}
        width={600}
        alt="Cone"
        className="absolute -bottom-1/3  -translate-y-1/2 z-30 right-6 size-[23dvh] motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[5s] motion-ease-in-out"
      />
      <Image
        src="/illustration/spring-3.png"
        height={600}
        width={600}
        alt="Cone"
        className="absolute -top-1/6 -scale-x-100 z-30 -left-[4dvw] size-[30dvh] motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[5s] motion-ease-in-out"
      />
      <Image
        src="/illustration/spring-2.png"
        height={300}
        width={300}
        alt="Cone"
        className="absolute top-12  z-30 left-48 size-36 motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[5s] motion-ease-in-out"
      />
      <Image
        src="/illustration/pyramid.png"
        height={300}
        width={300}
        alt="Cone"
        className="absolute top-1/2 -scale-x-100 z-30 -left-[2dvw] size-32 motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[5s] motion-ease-in-out"
      />
      <Image
        src="/illustration/Cone-2.png"
        height={600}
        width={600}
        alt="Cone"
        className="absolute -bottom-1/6  z-30 left-12 object-contain size-[38dvh] drop-shadow-2xl"
      />
      <Image
        src="/illustration/cylinder-2.png"
        height={300}
        width={300}
        alt="Cone"
        className="absolute top-1/2 -translate-y-1/2 z-30 -right-[6dvw] h-1/2 w-auto motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[5s] motion-ease-in-out"
      />
      <Image
        src="/illustration/pyramid-3.png"
        height={300}
        width={300}
        alt="Cone"
        className="absolute top-12  z-30 right-48 size-36 motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[5s] motion-ease-in-out"
      />
    </section>
  );
}
