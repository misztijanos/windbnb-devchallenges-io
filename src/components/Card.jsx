import { FaStar } from 'react-icons/fa'
import './card.scss'
const Card = ({ stay }) => {
  return (
    <div className="card">
      <img src={stay.img} alt={stay.title} className="card--image" />
      <div className="card--caption">
        <p className="card--description">
          {stay.superHost && <span className="card--super">super host</span>}
          {stay.description}
        </p>
        <div className="card--stars">
          <FaStar className="card--star" />
          <span className="card--number">{stay.stars.toFixed(2)}</span>
        </div>
      </div>
      <h3 className="card--title">{stay.title}</h3>
    </div>
  )
}
export default Card
