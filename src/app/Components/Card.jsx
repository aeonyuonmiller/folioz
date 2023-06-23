import { LazyMotion, domAnimation } from "framer-motion";
import { m } from "framer-motion"
import Arrow from "../Components/Icons/Arrow"

const Card = ({title, day, ordinal, month, year, link}) => {
  return (
    <LazyMotion features={domAnimation}>
    <m.div className="card"
      initial={{ opacity:0, scale:0.95 }} 
      whileInView={{ opacity:1, scale:1 }} 
      exit={{ opacity:0, scale:0 }} 
      viewport={{  margin: "50%", once: false }} 
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      whileHover={{ scale: 1.015 }}
    >
        <div className="content">
          <p>{day}<span className="accent">{ordinal} of</span> {month} {year}</p>
          <h2>{title}</h2>
        </div>
        <span className="arrow">
          <Arrow color="#d7d6d6" />
        </span>
        </m.div>
    </LazyMotion>
  )
}

export default Card