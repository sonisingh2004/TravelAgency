import { useState } from 'react'
import About from './components/About/About'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Tour from './components/Tour/Tour'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Header/>
    <Home/>
    <About/>
    <Tour/>
    {/* <Footer/> */}
  </>
  )
}

export default App
