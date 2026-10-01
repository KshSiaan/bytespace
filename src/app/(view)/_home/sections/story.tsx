import { Progress } from "@/components/ui/progress";
import { avatars, dataset } from "@/lib/data/data";
import Image from "next/image";
import React from "react";
import { CourseCard } from "./discover";
import { CheckIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

export default function Story() {
  return (
    <div className="overflow-hidden">
      <section className="relative lg:h-[80dvh] grid lg:grid-cols-2 gap-4 overflow-visible">
        {/* Full-section gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 -top-1/2 -translate-x-1/2 h-[150%] w-[150dvw] bg-radial from-[#CBFC0160] via-transparent to-transparent" />
        </div>
        <div className="pointer-events-none absolute left-0 inset-0 -z-10">
          <div className="absolute right-[-80dvw] bottom-[-40dvh] h-[150%] w-[150dvw] bg-radial from-[#003BE250] via-transparent to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-center items-center">
          <div className="lg:w-2/3 p-6 lg:p-0 space-y-4">
            <h2 className="text-2xl lg:text-[2.5rem] xl:text-[3rem] font-bold text-left">
              Your Path to Professional <br /> Growth Starts Here!
            </h2>
            <p>
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
          </div>
          <div className="w-2/3 flex items-center justify-start gap-8 mt-6">
            {[
              {
                amount: "12k",
                label: "Students",
              },
              {
                amount: "70+",
                label: "Courses",
              },
              {
                amount: "16",
                label: "Creators",
              },
            ].map((item, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className="flex flex-col items-start">
                <span className="text-secondary font-semibold text-3xl leading-none">
                  {item.amount}
                </span>
                <span className="">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col justify-end items-center">
          <Image
            src="/img/person.webp"
            alt="Person"
            width={1200}
            height={1200}
            className="h-[40dvw] lg:h-[60dvh] w-auto max-w-none z-30 object-contain object-bottom motion-translate-y-in-100 motion-opacity-in-10 motion-delay-1000 drop-shadow-2xl"
          />

          <div className="rounded-xl scale-50 absolute bg-background top-3/6 lg:scale-150 z-30 w-50 space-y-2 p-4 right-1/7 motion-duration-[8s] motion-translate-y-loop-[25px] motion-ease-in-out motion-preset-fade-lg  motion-delay-1500 drop-shadow-2xl">
            <h3 className="font-medium">Learning Progress</h3>
            <div className="text-3xl font-bold text-foreground">55%</div>
            <Progress value={55} />
          </div>

          <Image
            src="/illustration/spring-3.png"
            height={600}
            width={600}
            alt="Cone"
            className="absolute bottom-2/7 left-12 lg:left-auto lg:right-6 z-30
              size-24 lg:size-[23dvh]
              object-contain
              scale-50 lg:scale-100
              lg:-scale-x-100 lg:-translate-y-1/2
              drop-shadow-2xl
              motion-translate-y-loop-[25px]
              motion-delay-1000 motion-duration-[5s] motion-ease-in-out"
          />

          <CourseCard
            item={dataset[0]}
            className="absolute bottom-0 scale-50 lg:scale-100 hidden lg:block lg:-translate-y-1/2 z-0 left-2 lg:left-18 h-90 aspect-8/9 motion-duration-[10s] motion-translate-y-loop-[-25px] motion-ease-in-out"
          />
        </div>
      </section>

      <section className="relative lg:h-[80dvh] border-b grid grid-cols-2 gap-4 overflow-visible w-full">
        {/* Full-section gradient */}
        <div className="pointer-events-none absolute left-0 inset-0 -z-10">
          <div className="absolute left-[-80dvw] bottom-[-40dvh] h-[150%] w-[150dvw] bg-radial from-[#CBFC0160] via-transparent to-transparent" />
        </div>
        <div className="pointer-events-none absolute left-0 inset-0 -z-10">
          <div className="absolute right-[-80dvw] bottom-[-40dvh] h-[150%] w-[150dvw] bg-radial from-[#003BE250] via-transparent to-transparent" />
        </div>

        <div className="relative flex flex-col justify-end items-center order-2 lg:order-1 mt-6 lg:mt-0 col-span-2 lg:col-span-1">
          <Image
            src="/img/girl.png"
            alt="Person"
            width={1200}
            height={1200}
            className="h-[30dvh] lg:h-[70dvh] w-auto max-w-none z-30 object-contain object-bottom motion-translate-y-in-100 motion-opacity-in-10 motion-delay-1000 drop-shadow-2xl"
          />

          <div
            className="rounded-xl bg-secondary absolute text-background!  scale-50 lg:scale-100 right-0 top-24 w-75 z-0 space-y-2 p-4 lg:left-1/5 motion-preset-fade-lg drop-shadow-2xl
              motion-translate-y-loop-[15px]
              motion-delay-1000 motion-duration-[5s] motion-ease-in-out"
          >
            <h3 className="font-medium">Total Revenue</h3>
            <span className="text-xs">July 1-28</span>
            <div className="text-3xl font-bold">$120.29</div>
            <Progress value={55} />
          </div>
          <div
            className="rounded-xl absolute motion-translate-y-loop-[15px]
              motion-duration-[7s] motion-ease-in-out top-0 scale-50 lg:scale-100 bg-secondary text-background! lg:top-64 w-50 z-0 space-y-2 p-4 left-0 lg:left-1/5 motion-preset-fade-lg motion-delay-1500 drop-shadow-2xl"
          >
            <h3 className="font-medium">Total Revenue</h3>
            <span className="text-xs">2023</span>
            <div className="text-3xl font-bold ">$1,200.38</div>
            <Button className="rounded-full">+12$</Button>
          </div>

          <Image
            src="/illustration/spring-3.png"
            height={600}
            width={600}
            alt="Cone"
            className="absolute bottom-2/7 -scale-x-100! -translate-y-1/2 z-30 right-12 lg:right-24 size-24 lg:size-[23dvh] motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[5s] motion-ease-in-out"
          />
          <div className="rounded-xl absolute bg-background motion-translate-y-loop-[15px] motion-duration-[5s] motion-ease-in-out scale-75 lg:scale-100 bottom-1/6 z-30 space-y-1  p-4 right-24 -translate-x-1/2 motion-preset-fade-lg drop-shadow-2xl">
            <h3 className="font-medium">Happy Students</h3>
            <div className="text-xs text-foreground/50 font-medium flex items-center justify-start gap-1 mt-1">
              <span>4.5</span>
              <span>(240)</span>
              <StarIcon fill="currentColor" className="size-3 text-primary" />
            </div>
            <div className="">
              <AvatarGroup>
                {avatars.slice(0, 6).map((src) => (
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

          {/* <CourseCard
            item={dataset[0]}
            className="absolute bottom-0 -translate-y-1/2 z-0 left-18 h-90 aspect-8/9"
          /> */}
        </div>
        <div className="relative h-full flex flex-col justify-center items-center w-full col-span-2 lg:col-span-1 p-6 lg:p-0 mt-12 lg:mt-0 order-1 lg:order-2">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-2xl lg:text-[2.5rem] xl:text-[3rem] font-bold text-left">
              Create & Manage <br />
              Courses Easily.
            </h2>
            <p>
              <b>ByteSpace</b> supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
          </div>
          <div className="w-2/3 flex flex-col items-start justify-start gap-4 mt-8">
            {[
              "Share Your Expertise",
              "Monetize Your Passion",
              "Flexibility and Autonomy",
              "Build a Community",
            ].map((item, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <div
                    className="size-5 rounded-full bg-secondary flex justify-center items-center
"
                  >
                    <CheckIcon className="text-background size-4" />
                  </div>
                  <span className="">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
