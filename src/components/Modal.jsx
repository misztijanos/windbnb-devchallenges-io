import { useState } from 'react'
import './modal.scss'
import { IoMdClose } from 'react-icons/io'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { cities } from '../data'
const Modal = ({ show, setShow, city, setCity, handleClose }) => {
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
              <div className="modal--content--guest">Adults</div>
              <div className="modal--content--guest">Children</div>
              <p>todo: use MUI components for this</p>
            </div>
          )}
        </div>
        <button
          className="modal--button"
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
