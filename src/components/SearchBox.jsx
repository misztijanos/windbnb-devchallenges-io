import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { cities } from '../data'
import Modal from './Modal'

const SearchBox = ({ handleSearchClick }) => {
  const [show, setShow] = useState('') //values: 'cities', 'guests'
  const [city, setCity] = useState(cities[0])

  const handleClose = () => setShow('')
  return (
    <>
      <form className="header--searchbox">
        <p
          className="header--searchbox--location"
          onClick={() => setShow('cities')}
        >
          {city.name}, {city.country}
        </p>

        <p
          className="header--searchbox--guests"
          onClick={() => setShow('guests')}
        >
          Add guests
        </p>

        <p className="header--searchbox--search">
          <FaSearch />
        </p>
      </form>
      {
        show && (
          <Modal
            show={show}
            setShow={setShow}
            city={city}
            setCity={setCity}
            handleClose={handleClose}
          />
        ) /*  handleSubmit={}which select to have open depends on what's in city,
      will be handled in the modal*/
      }
    </>
  )
}
export default SearchBox
