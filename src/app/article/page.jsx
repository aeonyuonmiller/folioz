"use client";
// import Image from "next/image";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { m } from "framer-motion";
import Logo from "../Components/Logo";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <LazyMotion features={domAnimation}>
        <h1>Mind your cookies.</h1>

        <m.div
          className="title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.3, 0, 0.2, 1.01], delay: 0.1 }}
        >
          Mind <span>your</span> cookies
        </m.div>

        <m.div
          className="copyright"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.3, 0, 0.2, 1.01], delay: 0.4 }}
        >
          &copy;{new Date().getFullYear()}
        </m.div>

        <div className="logo">
          <Logo color="#C4C4C4" />
        </div>
      </LazyMotion>
    </AnimatePresence>
  );
}
