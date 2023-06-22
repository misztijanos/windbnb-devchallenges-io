import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
