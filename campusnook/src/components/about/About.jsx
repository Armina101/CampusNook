import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company inspiration story.' />

            <p>CampusNook is a journey inspired by the real-life struggles of students searching for the perfect accomodation before a new academic session. The inspiration springs from personal experiences and the desire to create a solution that resonates with the challenges faced by students.</p>
            <br></br>
            <p>As students ourselves, we vividly recall the stress and uncertainties associated with finding suitable accomodation. Late-night searches, last-minute decisions and the constant worry of settling into a new space- these experiences shaped the vision behind CampusNook.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
