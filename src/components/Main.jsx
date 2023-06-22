import './main.scss'
import { stays } from '../data'
import Card from './Card'
const Main = () => {
  return (
    <div className="main">
      <div className="main--header">
        <h1 className="main--header--title">Stays in Finland</h1>
        <p className="main--header--stays">12+ stays</p>
      </div>
      <div className="main--cards">
        {stays.map((stay) => (
          <Card stay={stay} key={stay.id} />
        ))}
      </div>
    </div>
  )
}
export default Main
