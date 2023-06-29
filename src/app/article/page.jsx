"use client";
// import Image from "next/image";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { m } from "framer-motion";
import Logo from "../Components/Logo";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <LazyMotion features={domAnimation}>
        <m.h1 initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>Mind your cookies.</m.h1>

        <div className="logo">
          <Logo color="#C4C4C4" />
        </div>
      </LazyMotion>
    </AnimatePresence>
  );
}
