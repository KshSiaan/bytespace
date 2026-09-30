import Footer from "@/components/core/footer";
import GridPattern from "@/components/core/grid-pattern";
import Navbar from "@/components/core/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-[80dvh] overflow-hidden bg-secondary">
        <GridPattern />

        <div className="relative z-50 flex min-h-[80dvh] w-full flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="relative w-full max-w-6xl text-center">
            <h1
              className="
                select-none
                bg-linear-to-b from-primary via-primary/80 to-transparent
                bg-clip-text
                text-[clamp(8rem,32vw,24rem)]
                font-extrabold
                leading-[0.75]
                tracking-[-0.06em]
                text-transparent
              "
            >
              404
            </h1>

            {/* Overlay message */}
            <p
              className="
                absolute
                bottom-[8%]
                left-1/2
                w-full
                -translate-x-1/2
                px-4
                text-center
                text-2xl
                font-semibold
                leading-tight
                text-background
              sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              The page you are looking
              <br />
              for doesn’t exist
            </p>
          </div>
          <p
            className="
              mt-8
              max-w-xl
              px-4
              text-center
              text-base
              font-normal
              leading-relaxed
              text-background
              sm:mt-10
              sm:text-lg
          md:text-xl
            "
          >
            Try to use a correct URL or go back to the homepage to start again.
          </p>

          <Button
            size="lg"
            className="z-40 mt-2 rounded-full px-6 sm:px-8"
            asChild
          >
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
}
