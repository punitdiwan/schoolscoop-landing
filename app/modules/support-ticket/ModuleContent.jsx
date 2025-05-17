import React from 'react';
import ModuleContent from '../../../components/Modules/ModuleContent';

const SupportTicketContent = () => {
    return (
        <>
            <ModuleContent
                imageSrc="/module-bg.webp" // Default image
                imagePosition="left"
                backgroundColor="#ffece0" // Default background color
                heading="Support Ticket Module"
                subheading="What is a Support Ticket Module?"
                paragraphs={[
                    "The Support Ticket Module in school software is a feature that enables users (teachers, students, parents, or staff) to raise issues or request assistance, which are then tracked and managed by the support team.",
                    "It is designed to streamline the process of reporting problems, requesting help, and ensuring that issues are addressed promptly and efficiently."
                ]}
            />
            <ModuleContent
                imageSrc="/module-bg2.png" // Default second image
                imagePosition="right"
                backgroundColor="#f9fafb" // Default second background color
                subheading="Why Do We Need Support Ticket Module in School Software?"
                paragraphs={[
                    "The Support Ticket module in school software is essential for managing and resolving issues efficiently within the school community.",
                    "It provides a structured system for students, parents, teachers, and staff to report problems or requests related to academics, administration, or technical support.",
                    "This module helps track the status of each ticket, ensures timely responses, and improves communication between the support team and users.",
                    "By organizing and prioritizing issues systematically, the support ticket module enhances problem-solving efficiency, reduces delays, and increases overall satisfaction, contributing to a smoother and more responsive school environment."
                ]}
            />
        </>
    );
};

export default SupportTicketContent;
