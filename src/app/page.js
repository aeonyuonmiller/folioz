"use client";
import Head from "next/head";
import Image from "next/image";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { m, useScroll, useTransform } from "framer-motion";
import Logo from "./Components/Logo";
import Breathe from "./Components/Icons/Breathe";
import Card from "./Components/Card";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <Head>
        <title>introvert</title>
        <meta name="description" content="comfortable in silence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode="wait">
        <LazyMotion features={domAnimation}>
          <m.div
            className="portrait-container"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.4, easings: "ease" }}
            style={{
              y: parallax,
              transition: {
                easings: "ease",
                duration: 2,
              },
            }}
          >
            <Image
              className="portrait"
              src="/selfportrait.png"
              alt="Selfportrait of Aeon Yuon Miller"
              width={720}
              height={1024}
              loading="lazy"
              quality={80}
              style={{ objectFit: "contain" }}
              // priority
            />
          </m.div>

          <m.div
            className="title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.3, 0, 0.2, 1.01],
              delay: 0.1,
            }}
            style={{
              opacity: fadeOut,
              transition: { duration: 0.4 },
            }}
          >
            Portfolio <span>of</span> Aeon Yuon Miller
          </m.div>

          <m.div
            className="copyright"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.3, 0, 0.2, 1.01],
              delay: 0.4,
            }}
            style={{
              opacity: fadeOut,
              transition: { duration: 0.4 },
            }}
          >
            &copy;{new Date().getFullYear()}
          </m.div>

          <m.div
            className="glas"
            initial={{ y: "10vh", opacity: 0 }}
            animate={{ y: "0vh", opacity: 1 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: [0.3, 0, 0.2, 1.01], delay: 1 }}
          >
            <m.h5
              style={{
                opacity: fadeOut,
                transition: { duration: 0.4 },
              }}
            >
              View works
            </m.h5>
            <div className="card-grid">
              <Card
                link="article"
                title="Mind your cookies"
                day="15"
                ordinal="th"
                month="July"
                year="2023"
              />
              <Card
                link="xxx"
                title="my minimalist mac set-up"
                day="15"
                ordinal="th"
                month="July"
                year="2023"
              />
              <Card
                link="xxx"
                title="5 fav books"
                day="15"
                ordinal="th"
                month="July"
                year="2023"
              />
              <Card
                link="xxx"
                title="The best figma plugins"
                day="15"
                ordinal="th"
                month="July"
                year="2023"
              />
              <Card
                link="xxx"
                title="Best albums"
                day="15"
                ordinal="th"
                month="July"
                year="2023"
              />
              <Card
                link="xxx"
                title="Mind your cookies"
                day="15"
                ordinal="th"
                month="July"
                year="2023"
              />
              <Card
                link="xxx"
                title="my minimalist mac set-up"
                day="15"
                ordinal="th"
                month="July"
                year="2023"
              />
            </div>

            <div className="contact">
              <Breathe />
              Working for Ballhaus West
            </div>
          </m.div>

          <div className="logo">
            <Logo color="#C4C4C4" />
          </div>
        </LazyMotion>
      </AnimatePresence>
    </>
  );
}
