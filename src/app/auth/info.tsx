"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Info() {
  const path = usePathname();

  if (path === "/auth/signup") {
    return (
      <>
        <h1 className="text-lg font-semibold text-background">
          Sign up and come in
        </h1>
        <p className="text-sm lg:text-base text-background mt-4">
          The registration process is straightforward, uncomplicated, and
          efficient, allowing users to sign up quickly, easily, and at no cost
        </p>
      </>
    );
  } else {
    return (
      <>
        <h1 className="text-lg font-semibold text-background">
          Sign in with ease
        </h1>
        <p className="text-sm lg:text-base text-background mt-4">
          Experience a seamless and efficient sign-in process that grants you
          instant access to a world of knowledge.
        </p>
      </>
    );
  }
}
