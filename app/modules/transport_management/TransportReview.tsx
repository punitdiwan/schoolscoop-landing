import React from 'react'

const TransportReview = () => {
  return (
    <>
       <div>
        <div className="relative">
          <img src="/imges/studentmanagement/a.png" className="w-[1380px] h-[420px]"/>
          <div className="md:w-[650px] md:h-[300px] absolute md:top-[10%] md:left-[25%] 
          xs:top-[10%] xs:left-[10%]
          p-6">


            <div className="grid md:grid-cols-2 ">
              <div className="bg-[#ffb000] text-[20px] p-5 text-white font-semibold">
                {" "}
                …The concept of information sharing by ScoolScoop has set up new
                opportunities of better interaction values. Now I Think that
                SchoolScop was just the tool we needed…
              </div>
              <div className="flex flex-col items-center xs:hidden bg-white">
                <div className="">
                  <img src="/imges/studentmanagement/delhi-public-school-logo-E8BDE7B79B-seeklogo.com_-77x100 (1).png" />
                </div>
                <div>
                  <h1>Princicpal,</h1>
                </div>
                <div>
                  <h1>Delhi Public School, New Delhi, India</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default TransportReview