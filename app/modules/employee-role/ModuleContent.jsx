import React from 'react';
import ModuleContent from '../../../components/Modules/ModuleContent';

const EmployeeRoleContent = () => {
    return (
        <>
            <ModuleContent
                imageSrc="/module-bg.webp" // Default image
                imagePosition="left"
                backgroundColor="#ffece0" // Default background color
                heading="Employee Role Module"
                subheading="What is an Employee Role Module?"
                paragraphs={[
                    "The Employee Role Module in school ERP software is a feature that allows administrators to define, assign, and manage various roles for employees within the system.",
                    "It specifies what access, permissions, and responsibilities each staff member has, ensuring that they can only access the data and perform the tasks relevant to their position.",
                    "This module is designed to streamline the management of roles, improve security, and maintain data privacy."
                ]}
            />
            <ModuleContent
                imageSrc="/module-bg2.png" // Default second image
                imagePosition="right"
                backgroundColor="#f9fafb" // Default second background color
                subheading="Why Do We Need Employee Role Module in School Software?"
                paragraphs={[
                    "The Employee Role module in school software is important for clearly defining and managing the responsibilities and access levels of different staff members within the school system.",
                    "It allows administrators to assign specific roles—such as teacher, administrator, librarian, or counselor—each with tailored permissions and access to relevant features.",
                    "This ensures that employees can efficiently perform their duties without unnecessary access to sensitive information, enhancing data security and operational clarity.",
                    "By organizing employee roles, the school can improve workflow management, accountability, and collaboration among staff, leading to a more structured and efficient work environment."
                ]}
            />
        </>
    );
};

export default EmployeeRoleContent;
