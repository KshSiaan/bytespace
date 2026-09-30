"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { avatars, categories, dataset } from "@/lib/data/data";
import { cn } from "cn";
import {
  ChartNoAxesColumnIncreasingIcon,
  PlusIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null,
  );

  const filteredDataset = () => {
    if (selectedCategory === null) {
      return dataset;
    }

    return dataset.filter((course) => course.type.includes(selectedCategory));
  };

  return (
    <section className="w-full max-w-[95dvw] px-[7dvw] pt-24 lg:pb-24 overflow-hidden">
      <h2 className="text-2xl lg:text-[2.5rem] xl:text-[3rem] font-bold text-center">
        Discover Your Passion,
        <br /> Build Your Skills
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-center w-full text-foreground/50 mt-4">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>

      <div className="flex items-center justify-center gap-4 mt-8 flex-wrap pb-6">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          className={cn(
            "rounded-full",
            selectedCategory !== null && "bg-muted border-0",
          )}
          onClick={() => setSelectedCategory(null)}
        >
          Featured
        </Button>
        {categories.map((category) => (
          <Button
            key={category?.name}
            variant={selectedCategory === category.name ? "default" : "outline"}
            className={cn(
              "rounded-full",
              selectedCategory !== category.name && "bg-muted border-0",
            )}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </Button>
        ))}
        <Button
          variant="ghost"
          className="rounded-full text-blue-600 hover:text-blue-700/90 font-semibold"
        >
          More <PlusIcon />
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDataset()
          ?.slice(0, 6)
          .map((item) => (
            <CourseCard key={item.id} item={item} />
          ))}
      </div>
    </section>
  );
}

export function CourseCard({
  item,
  className,
}: {
  item: (typeof dataset)[number];
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "py-4! cursor-pointer hover:shadow-xl transition-shadow",
        className,
      )}
    >
      <CardHeader className="px-4!">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.title.toLocaleLowerCase()}
            width={400}
            height={225}
            className="w-full aspect-video object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <div className="rounded-full bg-background/60 px-2.5 py-1.5 text-[11px] font-semibold backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                {item?.lessons || "n/a"} Lessons
              </div>

              <div className="rounded-full bg-background/60 px-2.5 py-1.5 text-[11px] font-semibold backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                {item?.minutes
                  ? Math.floor(item.minutes / 60) > 0
                    ? `${Math.floor(item.minutes / 60)}h ${item.minutes % 60}m`
                    : `${item.minutes}m`
                  : "n/a"}
              </div>

              <div className="rounded-full bg-background/60 px-2.5 py-1.5 text-[11px] font-semibold backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                59 Comments
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 mt-2">
          <CardTitle className="text-xl font-bold line-clamp-1">
            {item.title}
          </CardTitle>
          <div className="flex items-center gap-1 font-semibold text-foreground/50">
            {item.rating}{" "}
            <StarIcon fill="currentColor" className="size-4 text-gray-300" />
          </div>
        </div>
        <p>
          by{" "}
          <Link
            className="text-secondary hover:underline"
            href={`/creators/${item.creator}`}
          >
            {item.creator}
          </Link>
        </p>
        <div className="flex items-center justify-start gap-2 mt-4">
          <span className="flex items-center gap-1 text-sm font-semibold text-muted-foreground py-2 px-3 bg-muted rounded-full">
            <ChartNoAxesColumnIncreasingIcon className="size-4" />
            Beginner
          </span>
          <AvatarGroup>
            {avatars.slice(0, 4).map((src) => (
              <Avatar key={src} className="w-8 h-8">
                <AvatarImage src={src} />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount className="font-semibold bg-primary text-xs">
              26+
            </AvatarGroupCount>
          </AvatarGroup>
        </div>
        <h4 className="font-semibold space-x-0 text-foreground/50 mt-4">
          <span className="text-xl font-bold text-secondary">
            ${item?.price}
          </span>
          <span>/lifetime</span>
        </h4>
      </CardHeader>
    </Card>
  );
}
