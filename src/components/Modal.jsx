import { useState } from 'react'
import './modal.scss'
import { IoMdClose } from 'react-icons/io'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { cities } from '../data'

const Modal = ({
  show,
  setShow,
  city,
  setCity,
  guests,
  setGuests,
  handleClose,
}) => {
  const addChild = () => {
    setGuests({ ...guests, children: guests.children + 1 })
  }
  const removeChild = () => {
    if (guests.children > 0) {
      setGuests({ ...guests, children: guests.children - 1 })
    }
  }
  const addAdult = () => {
    setGuests({ ...guests, adults: guests.adults + 1 })
  }
  const removeAdult = () => {
    if (guests.adults > 0) {
      setGuests({ ...guests, adults: guests.adults - 1 })
    }
  }
  return (
    <div className="m_overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal--header">
          <p>Edit your search</p>
          <IoMdClose className="modal--header--close" onClick={handleClose} />
        </div>
        <div className="modal--main">
          <div className="modal--location" onClick={() => setShow('cities')}>
            <p className="modal--label">Location</p>
            <p>
              {city.name}, {city.country}
            </p>
          </div>
          <div className="modal--guests" onClick={() => setShow('guests')}>
            <p className="modal--label">Guests</p>
            <p>
              <span> Add guests</span>
            </p>
          </div>
        </div>
        <div className="modal--content">
          {show === 'cities' && (
            <ul className="modal--content--cities">
              {cities.map((c, i) => (
                <li
                  className="modal--content--city"
                  key={c.id}
                  onClick={() => setCity(cities[i])}
                >
                  <FaMapMarkerAlt fontSize="20px" />
                  <span>
                    {c.name}, {c.country}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {show === 'guests' && (
            <div className="modal--content--guests">
              <div className="modal--content--guest">
                <p className="modal--content--title">Adults</p>
                <p className="modal--content--description">Ages 13 or above</p>
                <div className="modal--content--buttongroup">
                  <button
                    className="modal--content--button"
                    onClick={removeAdult}
                  >
                    -
                  </button>
                  <p>{guests.adults}</p>
                  <button className="modal--content--button" onClick={addAdult}>
                    +
                  </button>
                </div>
              </div>

              <div className="modal--content--guest">
                <p className="modal--content--title">Children</p>
                <p className="modal--content--description">Ages 2-12</p>
                <div className="modal--content--buttongroup">
                  <button
                    className="modal--content--button"
                    onClick={removeChild}
                  >
                    -
                  </button>
                  <p>{guests.children}</p>
                  <button className="modal--content--button" onClick={addChild}>
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          className="modal--search_button"
          onClick={() => {
            setShow('')
            alert(
              "Since this is a demo page, the search results will never change. Oh, and you can't live in these homes, you'll have to go to AirBnb for that."
            )
          }}
        >
          <FaSearch fontSize="16px" />
          <span>Search</span>
        </button>
      </div>
    </div>
  )
}
export default Modal
