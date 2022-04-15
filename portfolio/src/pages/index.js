import React from "react"
import "./app.scss"
import { About, Hero, Projects, Footer } from "../components/componentExport"

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
