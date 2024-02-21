import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Book Your Bedspace Today'  subtitle='Find new & beautiful rooms located on your campus.' />
        </div>
      </section>
    </>
  )
}

export default Hero
