import React from 'react'

const HrImage = () => {
  return (
    <>
          <div>
        <div className=" relative text-center text-white">
          <img src="/imges/hr_management/school-administration-hr-management.jpg" className="xs:h-[650px]" />
          <div className="absolute 
          xs:top-[30%] xs:left-[5%]
          md:top-[30%] md:left-[1%] ">
            {" "}
            <h1 className="text-[40px] font-bold">Administration & Human Resources Management</h1>
            <p className=" ">Empower your administrative staff to spend less time on repetitive manual tasks and run your school more efficiently.
             Automate processes and simplify data flows to make management easier..</p>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default HrImage