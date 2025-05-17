import React from 'react';
import ModuleContent from '../../../components/Modules/ModuleContent';




const ManageSubject = () =>{
    return(
        <>
        <ModuleContent
      imageSrc="/module-bg.webp" // Replace with your actual image path
      imagePosition="left"
      backgroundColor="#ffece0"
      heading="Manage Subject"
      subheading="What is a Manage Subject Module?"
      paragraphs={[
        "A Manage Subject Module is a feature within school management software that allows institutions to efficiently organize and manage subjects offered in various academic programs. It helps administrators and teachers create, assign, and modify subjects, allocate teachers to specific subjects, and set up subject-specific schedules.",
        "The Manage Subject module in school software is vital for organizing and streamlining the academic curriculum. It allows schools to efficiently create, update, and assign subjects to different classes and teachers, ensuring that the syllabus is well-structured and easily accessible. This module helps maintain consistency in course content, supports timetable planning, and facilitates smooth communication between teachers and students regarding subject-specific materials and assessments.",
        "By managing subjects digitally, schools can reduce administrative workload, avoid scheduling conflicts, and ensure that academic planning aligns with educational standards. Overall, the module contributes to a more organized, transparent, and effective learning environment."
      ]}
    />
            <ModuleContent
      imageSrc="/module-bg2.png" 
      imagePosition="right"
      backgroundColor="#f9fafb"
      subheading="Why Do We Need Manage subject module in school Software?"
paragraphs={[
  "The Manage Subject module in school software is vital for organizing and streamlining the academic curriculum.",
  "It allows schools to efficiently create, update, and assign subjects to different classes and teachers, ensuring that the syllabus is well-structured and easily accessible.",
  "This module helps maintain consistency in course content, supports timetable planning, and facilitates smooth communication between teachers and students regarding subject-specific materials and assessments.",
  "By managing subjects digitally, schools can reduce administrative workload, avoid scheduling conflicts, and ensure that academic planning aligns with educational standards.",
  "Overall, the module contributes to a more organized, transparent, and effective learning environment."
]}
 />

        </>
    )
}
export default ManageSubject
