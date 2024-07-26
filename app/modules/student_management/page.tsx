"use client"
import NavBar from '@/components/Header/NavBar'
import TopHeader from '@/components/Header/TopHeader'
import WhatsappForm from '@/components/whatsapp/WhatsappForm'
import React from 'react'
import StudentImage from './StudentImage'
import StudentManagementModule from './StudentManagementModule'
import SchoolScoopFeature from './SchoolScoopFeature'
import StudentReview from './StudentReview'
import SectionNine from '@/components/sections/SectionNine'
import Footer from '@/components/Footer/Footer'
import SectionSix from '@/components/sections/SectionSix'

const StudentManagement = () => {
  return (
<>
<div>

  <NavBar />
  <div className="p-[20px]">
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
      <WhatsappForm />

      <div
        className="
xs:top-[250px] xs:right-[1px] xs:fixed xs:z-10 md:z-10
md:top-[210px] md:right-[1px] md:fixed"
      >
        <img src="/imges/Demo-Button-v.gif" alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."/>
      </div>

      <div className="mx-auto p-2 ">

<StudentImage/> 
<StudentManagementModule/>
<SchoolScoopFeature/>
<StudentReview/>
<SectionSix/>


<Footer />
</div>
</div>
</div>
</div>
</>
  )
}

export default StudentManagement