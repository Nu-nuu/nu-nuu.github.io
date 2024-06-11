import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Service from './components/service/Service'
import Qualification from './components/qualification/Qualification'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Service />
        <Qualification />
        <Contact />
      </main>
    </>
  )
}

export default App
