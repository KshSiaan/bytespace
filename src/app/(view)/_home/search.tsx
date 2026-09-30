"use client";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useIsMobile } from "@/hooks/use-mobile";
import { dataset } from "@/lib/data/data";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function Search() {
  const [onFocus, setOnFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();

  const filteredDataset =
    dataset?.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    ) ?? [];
  return (
    <div className=" lg:w-2/5 flex items-center gap-2 z-50 motion-delay-1000 motion-safe:motion-fade-in">
      <InputGroup className="bg-background rounded-full md:h-12 relative">
        <InputGroupInput
          className="text-sm md:text-base! font-medium placeholder:text-foreground/50"
          placeholder="Course, topic, creator"
          id="search-input"
          onFocus={() => setOnFocus(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onBlur={() => setOnFocus(false)}
          autoComplete="off"
        />
        <InputGroupAddon className="md:ml-2" align="inline-start">
          <MdSearch className="size-5 text-foreground/50" />
        </InputGroupAddon>
        <div
          className={cn(
            "space-y-2",
            onFocus
              ? "absolute flex flex-col justify-start items-start w-full p-2 bg-background rounded-lg z-50"
              : "hidden",
            isMobile ? "top-10" : "top-12",
          )}
        >
          {searchQuery && filteredDataset.length > 0 ? (
            filteredDataset.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href={`/courses?type=${item.title.trim().toLowerCase()}`}
                className="hover:bg-accent/50 rounded-lg p-2"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.title.toLowerCase()}
                    width={400}
                    height={225}
                    className="w-full object-cover rounded-lg size-6!"
                  />
                  <div className="flex-1">
                    <p className="text-xs font-medium line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm text-foreground/50">
              No results found for "{searchQuery}"
            </p>
          )}
        </div>
      </InputGroup>
      <Button
        className="rounded-full md:h-12 px-6 font-semibold md:text-base cursor-pointer! z-10"
        asChild
      >
        {searchQuery ? (
          <Link href={`/courses?type=${searchQuery.trim().toLowerCase()}`}>
            Search
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => {
              //set focus on the input field when search button is clicked
              const input = document.querySelector(
                "#search-input",
              ) as HTMLInputElement;
              if (input) {
                input.focus();
              }
            }}
          >
            Search
          </button>
        )}
      </Button>
    </div>
  );
}
