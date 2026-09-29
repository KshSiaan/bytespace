"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { categories, dataset } from "@/lib/data/data";
import { cn } from "cn";
import { PlusIcon } from "lucide-react";
import React, { useId } from "react";

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
    <section className="w-full max-w-[95dvw] px-[7dvw] py-24 overflow-hidden">
      <h2 className="text-2xl lg:text-[2.5rem] xl:text-[3rem] font-bold text-center">
        Discover Your Passion,
        <br /> Build Your Skills
      </h2>
      <p className="text-lg text-center w-full text-foreground/50 mt-4">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, <br /> from
        technology to the arts, and make a difference in your career and life.
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
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={cn(
              "rounded-full",
              selectedCategory !== category && "bg-muted border-0",
            )}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
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

function CourseCard({ item }: { item: (typeof dataset)[number] }) {
  const id = useId();
  return (
    <Card id={id}>
      <pre>
        <code>{JSON.stringify(item, null, 2)}</code>
      </pre>
    </Card>
  );
}
