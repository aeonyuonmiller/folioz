import Chevron_Right from "../Components/Icons/Chevron_Right"

const Card = ({title, date}) => {
  return (
    <div className='card'>
      <div className="content">
        <p>{date}</p>
        <h2>{title}</h2>
      </div>
      <span>
        <Chevron_Right color="#ccc" />
      </span>
    </div>
  )
}

export default Card