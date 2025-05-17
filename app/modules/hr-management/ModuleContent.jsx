import ModuleContent from '../../../components/Modules/ModuleContent';

const HrContent= () => {
return(
    <>
            <ModuleContent
      imageSrc="/module-bg.webp" // Replace with your actual image path
      imagePosition="left"
      backgroundColor="#ffece0"
      heading="HR management system"
      subheading="What is an HR Management System (HRMS)?"
      paragraphs={[
        "An HR Management System (HRMS) is a software solution designed to manage and automate various human resource functions within an organization. It helps HR teams streamline processes such as recruitment, employee data management, payroll, performance evaluations, attendance, and benefits administration.",
        "By centralizing and automating these tasks, HRMS improves efficiency, reduces errors, ensures compliance with labor laws, and enhances employee satisfaction. It provides organizations with the tools to manage their workforce more effectively, improve productivity, and make data-driven decisions."
      ]}
    />
            <ModuleContent
      imageSrc="/module-bg2.png" 
      imagePosition="right"
      backgroundColor="#f9fafb"
      subheading="Why Do We Need HR Management Software?"
paragraphs={[
   "HR Management Software is an essential part of a school ERP system because it simplifies and streamlines all human resource functions within the institution.",
  "Schools have a wide range of staff, from teaching faculty to administrative and support teams, and managing their recruitment, attendance, payroll, leaves, and performance manually can be time-consuming and error-prone.",
  "HR software automates these processes, ensures compliance with policies, and maintains accurate staff records.",
  "It also improves communication, boosts staff satisfaction, and allows school administrators to make informed decisions based on real-time HR data.",
  "By integrating HR management into the school ERP, institutions can operate more efficiently, transparently, and professionally."
]}
 />
    </>
)
}
export default HrContent