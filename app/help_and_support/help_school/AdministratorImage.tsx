import { Input } from '@nextui-org/react'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";

import React from 'react'

const AdministratorImage = () => {
  return (
   <>
    <div>
        <div className=" relative text-center text-white">
          <img src="/imges/student_parentsupport/edumarshal-support.jpg" alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider." className="xs:h-[450px]" />
          <div className="absolute 
          xs:top-[30%] xs:left-[5%]
          md:top-[30%] md:left-[25%] ">
            {" "}
            <h1 className="text-[40px] font-bold">EduSparsh Help & Support</h1>
            <p className=" ">Search our resource center for quick resolution or get in touch with our support team.</p>
            <div className="md:mt-[1rem] xs:mr-4 xs:mt-5 ">
              <Input type='Search' variant='faded' color='success' label="What do you Need help with ?"  size='md' radius='full' endContent={<FaSearch  className="fill-light-green-500 mb-2 w-[90px]"/>} />
             
            </div>
          </div>
        </div>
      </div>
   
   </>
  )
}

export default AdministratorImage