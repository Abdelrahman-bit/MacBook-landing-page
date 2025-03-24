import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Photos from './components/Photos'
import Features from './components/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Photos />
      <Features />
    </>
  )
}

export default App
