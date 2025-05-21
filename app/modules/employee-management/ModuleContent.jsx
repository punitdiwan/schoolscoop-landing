import React from 'react';
import ModuleContent from '../../../components/Modules/ModuleContent';

const EmployeeContent = () => {
    return (
        <>
            <ModuleContent
                imageSrc="/module-bg.webp" 
                imagePosition="left"
                  backgroundColor="#ffece0"
                heading="Employee Management System"
                subheading="What is an Employee Management System?"
                paragraphs={[
                    "An Employee Management System (EMS) is a software solution designed to streamline and automate the management of employee-related tasks and processes. It helps organizations manage employee data, track attendance, handle payroll, manage leave requests, performance evaluations, and more.",
                    "The system centralizes employee information, enabling HR teams and managers to quickly access, update, and organize employee records. EMS enhances productivity, ensures compliance with labor laws, reduces administrative workload, and provides valuable insights into workforce management.",
                    "It is a key tool for improving efficiency and communication within an organization."
                ]}
            />
            <ModuleContent
                imageSrc="/module-bg2.png" 
                imagePosition="right"
                backgroundColor="#f9fafb"
                subheading="Why Do We Need Employee Management Software?"
                paragraphs={[
                    "Employee Management Software is a vital component of a school ERP system because it helps manage all staff-related operations efficiently under one platform.",
                    "Schools have diverse employee roles—including teachers, administrative staff, and support personnel—and managing their data manually can lead to errors and inefficiencies.",
                    "Integrated employee management in a school ERP automates tasks such as attendance tracking, payroll, leave management, performance evaluation, and staff scheduling. It ensures transparency, accuracy, and timely communication within the institution.",
                    "Moreover, it helps school administrators make informed decisions based on real-time data, enhances HR efficiency, and contributes to a more organized and professional work environment across the school.",
                    "In short, Employee Management Software ensures smooth operations, reduces administrative burden, and improves overall efficiency within the organization."
                ]}
            />
        </>
    );
};

export default EmployeeContent;
