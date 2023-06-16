import { motion } from "framer-motion"
import Chevron_Right from "../Components/Icons/Chevron_Right"

const Card = ({title, date}) => {
  return (
    <motion.div className='card'
      initial={{ opacity:0, scale:0.95 }} 
      whileInView={{ opacity:1, scale:1 }} 
      exit={{ opacity:0, scale:0 }} 
      viewport={{  margin: "20%", once: false }} 
      transition={{ type: "spring", stiffness: 400, damping: 10, staggerChildren: 0.1 }}
      whileHover={{ scale: 1.015, y: -2 }}
    >
      <div className="content">
        <p>{date}</p>
        <h2>{title}</h2>
      </div>
      <span>
        <Chevron_Right color="#ccc" />
      </span>
    </motion.div>
  )
}

export default Card