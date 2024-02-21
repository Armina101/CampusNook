import React from "react"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Team />
      <Price />
    </>
  )
}

export default Home
