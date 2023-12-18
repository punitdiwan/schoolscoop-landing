import React from 'react'

const ContactImage = () => {
  return (
    <>
     <div>
        <div className=" relative text-center text-white">
          <img src="/imges/contact-banner-2.jpeg" className="xs:h-[600px] w-[1370px]" />
          <div className="absolute 
          xs:top-[70%] xs:left-[5%]
          md:top-[70%] md:left-[1%] ">
            {" "}
            <h1 className="md:text-[40px]  font-bold">Always Think Outside The Box And Embrace Opportunities 
            That Appear, Wherever They Might Be</h1>
            
          
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactImage