import logo from '../assets/logo.png'
import SearchBox from './SearchBox'
import './header.scss'
SearchBox
const Header = () => {
  const handleSearchClick = () => {
    alert('hi')
  }
  return (
    <div className="header">
      <img className="header--logo" src={logo} alt="windbnb logo" />
      <SearchBox handleSearchClick={handleSearchClick} />
    </div>
  )
}
export default Header
