import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Service from './components/service/Service'

function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Service />
      </main>
    </>
  )
}

export default App
