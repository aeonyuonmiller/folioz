// import Image from 'next/image'
"use client";

import { motion } from "framer-motion"
import Logo from './Components/Logo'
import Card from "./Components/Card";

export default function Home() {
  return (
    <>
    <motion.div className='portrait' initial={{y: 50, opacity:0}} animate={{y: 0, opacity:1}} transition={{duration: .4, ease: [.3,0,.2,1.01]}} />
    
    <motion.div className='title' initial={{y: 50, opacity:0}} animate={{y: 0, opacity:1}} transition={{duration: .4, ease: [.3,0,.2,1.01], delay: .1}}>Portfolio <span>of</span> Aeon Yuon Miller</motion.div>


    <motion.div className='glas' initial={{y: "10vh", opacity: 0}} animate={{y: "0vh", opacity: 1}} transition={{duration: .4, ease: [.3,0,.2,1.01], delay: 1 }}>
      <h5>View works</h5>
      <div className="card-grid">
        <Card title="Mind your cookies" date="xx.xx.xxxx" />
        <Card title="my minimalist mac set-up" date="xx.xx.xxxx" />
        <Card title="My 5 fav books" date="15.06.2023" />
      </div>
    </motion.div>

    <motion.div className='date' initial={{y: 50, opacity:0}} animate={{y: 0, opacity:1}} transition={{duration: .4, ease: [.3,0,.2,1.01], delay: .4}}>&copy;{new Date().getFullYear()}</motion.div>
    
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
    </>
  )
}
