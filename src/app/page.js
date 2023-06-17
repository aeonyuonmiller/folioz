// import Image from 'next/image'
"use client";

import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { m } from "framer-motion";
import Logo from "./Components/Logo";
import Card from "./Components/Card";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <LazyMotion features={domAnimation}>
        <m.div
          className="portrait"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.3, 0, 0.2, 1.01] }}
        />

        <m.div
          className="title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.3, 0, 0.2, 1.01], delay: 0.1 }}
        >
          Portfolio <span>of</span> Aeon Yuon Miller
        </m.div>

        <m.div
          className="copyright"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.3, 0, 0.2, 1.01], delay: 0.4 }}
        >
          &copy;{new Date().getFullYear()}
        </m.div>

        <m.div
          className="glas"
          initial={{ y: "10vh", opacity: 0 }}
          animate={{ y: "0vh", opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.3, 0, 0.2, 1.01], delay: 1 }}
        >
          <h5>View works</h5>
          <div className="card-grid">
            <Card
              title="Mind your cookies"
              day="15"
              ordinal="th"
              month="July"
              year="2023"
            />
            <Card
              title="my minimalist mac set-up"
              day="15"
              ordinal="th"
              month="July"
              year="2023"
            />
            <Card
              title="5 fav books"
              day="15"
              ordinal="th"
              month="July"
              year="2023"
            />
            <Card
              title="The best figma plugins"
              day="15"
              ordinal="th"
              month="July"
              year="2023"
            />
            <Card
              title="Best albums"
              day="15"
              ordinal="th"
              month="July"
              year="2023"
            />
            <Card
              title="Mind your cookies"
              day="15"
              ordinal="th"
              month="July"
              year="2023"
            />
            <Card
              title="my minimalist mac set-up"
              day="15"
              ordinal="th"
              month="July"
              year="2023"
            />
          </div>
        </m.div>

        <div className="logo">
          <Logo color="#C4C4C4" />
          {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        </div>
      </LazyMotion>
    </AnimatePresence>
  );
}
