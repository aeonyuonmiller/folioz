"use client";
import Link from "next/link"
import { m } from "framer-motion";

function Logo({color}) {
  return (
  <Link href="/">
    <m.svg
      layoutId="logo"
      initial={{opacity:0}}
      animate={{opacity:1}}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      fill="none"
      viewBox="0 0 60 20"
    >
      <path
        fill={color}
        // fillOpacity="0.8"
        fillRule="evenodd"
        d="M14.957 1.36a3.375 3.375 0 014.773 0l4.773 4.773a3.376 3.376 0 01.694 3.767l.946-.946a3.375 3.375 0 014.773 4.773L26.143 18.5a3.375 3.375 0 11-4.773-4.773l2.127-2.127a3.376 3.376 0 01-3.767-.694l-4.773-4.773a3.375 3.375 0 010-4.772zM0 9.944a3.375 3.375 0 015.336-2.747 3.375 3.375 0 015.03-4.485l4.772 4.773a3.375 3.375 0 11-4.772 4.772L6.19 8.081A3.375 3.375 0 110 9.943zM30.398 2.71a3.375 3.375 0 014.773 0l4.602 4.602a3.375 3.375 0 014.932-4.602l4.602 4.602a3.375 3.375 0 014.932-4.602l4.773 4.773a3.375 3.375 0 11-4.773 4.772l-4.602-4.602a3.375 3.375 0 01-4.932 4.602l-4.602-4.602a3.375 3.375 0 01-4.932 4.602l-4.773-4.772a3.375 3.375 0 010-4.773z"
        clipRule="evenodd"
      ></path>
      </m.svg>
    </Link>
  );
}

export default Logo;