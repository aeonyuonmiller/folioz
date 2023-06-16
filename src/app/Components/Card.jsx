import { motion } from "framer-motion"
import Chevron_Right from "../Components/Icons/Chevron_Right"

const Card = ({title, date}) => {
  return (
    <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} exit={{opacity:0, scale:0}} viewport={{ margin: "20%", once: false }} className='card'>
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