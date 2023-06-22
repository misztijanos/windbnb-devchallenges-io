import { FaSearch } from 'react-icons/fa'
const SearchBox = ({ handleSearchClick }) => {
  return (
    <form className="header--searchbox" onClick={handleSearchClick}>
      <p className="header--searchbox--location">Helsinki, Finland</p>
      {/* <select
        className="header--searchbox--location"
        name="location"
        id="location"
      >
        <option value="Helsinki">Helsinki, Finland</option>
        <option value="Turku">Turku, Finland</option>
        <option value="Outu">Outu, Finland</option>
        <option value="Vaasa">Vaasa, Finland</option>
      </select> */}

      <p className="header--searchbox--guests">Add guests</p>

      <p className="header--searchbox--search">
        <FaSearch />
      </p>
    </form>
  )
}
export default SearchBox
