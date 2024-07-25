import { Carousel } from '@material-tailwind/react'
import React from 'react'

const Carosel = () => {
  return (
    <>
    <div>
    <Carousel transition={{ duration: 2 }} className="rounded-xl" autoplay loop>
    <img
        src="/imges/oie_34SfRcEmQjpE.jpg"
        alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
        className="h-full w-full object-cover"
      />
      <img
        src="car1.png"
        alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
        className="h-full w-full object-cover"
      />
      <img
         src="car2.png"
        alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
        className="h-full w-full object-cover"
      />
      <img
         src="car3.png"
        alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
        className="h-full w-full object-cover"
      />
      <img
        src="car4.png"
        alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
        className="h-full w-full object-cover"
      />
    
    </Carousel>
    </div>
    </>
  )
}

export default Carosel