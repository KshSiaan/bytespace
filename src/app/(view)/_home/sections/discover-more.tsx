import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/lib/data/data";
import Link from "next/link";
import React from "react";

export default function DiscoverMore() {
  return (
    <section className="w-full max-w-[95dvw] px-[7dvw] py-24 overflow-hidden">
      <h2 className="text-2xl lg:text-[2.5rem] xl:text-[3rem] font-bold text-center">
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-center w-4/5 mx-auto text-foreground/50 mt-4">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there's
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
        {categories
          ?.sort(() => Math.random() - 0.5)
          .slice(0, 6)
          .map((category) => (
            <Link href={`/courses?type=${category.name}`} key={category?.name}>
              <Card className=" flex flex-col items-center justify-center gap-4 p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  <div className="bg-primary size-12 lg:size-24 aspect-square rounded-full flex items-center justify-center">
                    <category.icon className="8 lg:size-12 text-foreground" />
                  </div>
                  <h5 className="text-sm lg:text-lg leading-7 font-semibold text-center line-clamp-2 min-h-14">
                    {category.name}
                  </h5>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
    </section>
  );
}
