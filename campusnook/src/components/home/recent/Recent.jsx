import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Now Available Rooms' subtitle='Discover our newly available rooms, thoughtfully designed for comfort and style. Immerse yourself in a blend of modern amenities and cozy ambiance, creating the perfect retreat for your stay.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
