"use client";
import { motion } from "motion/react";
import React from "react";

export default function Circle() {
  return (
    <motion.div
      initial={{ width: "400dvh", backgroundColor: "rgba(212, 251, 32, 1)" }}
      animate={{ width: "120dvh", backgroundColor: "rgba(212, 251, 32, 1)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-primary w-full  absolute bottom-0 translate-y-2/3 aspect-square rounded-full shadow-xl z-10!"
    />
  );
}
