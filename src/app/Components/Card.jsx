import Chevron_Right from "../Components/Icons/Chevron_Right"

const Card = ({title, description}) => {
  return (
    <div className='card'>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <span>
        <Chevron_Right color="#ccc" />
      </span>
    </div>
  )
}

export default Card