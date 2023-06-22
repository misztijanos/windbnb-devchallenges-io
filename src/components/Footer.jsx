import './footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer--copyright">
        © {new Date().getFullYear()} Miszti Janos,{' '}
        <a href="https://github.com/misztijanos">github.com/misztijanos</a>
      </p>
      <p className="footer--copyright">
        Design by Thu Nghiem,{' '}
        <a href="https://Devchallenges.io">Devchallenges.io</a>
      </p>
    </div>
  )
}
export default Footer
