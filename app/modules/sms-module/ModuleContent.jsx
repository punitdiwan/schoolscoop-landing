import React from 'react';
import ModuleContent from '../../../components/Modules/ModuleContent';

const SmsModuleContent = () => {
    return (
        <>
            <ModuleContent
                imageSrc="/module-bg.webp" // Default image
                imagePosition="left"
                backgroundColor="#ffece0" // Default background color
                heading="SMS Module"
                subheading="What is an SMS Module?"
                paragraphs={[
                    "An SMS Module is a feature within school management software that enables schools to send automated text messages to parents, students, and staff.",
                    "It allows quick communication for various purposes, such as notifying about fee payments, exam schedules, attendance, event reminders, and emergency alerts.",
                    "This module helps schools keep everyone informed in real time, ensuring timely updates and improving communication between the institution and the school community."
                ]}
            />
            <ModuleContent
                imageSrc="/module-bg2.png" // Default second image
                imagePosition="right"
                backgroundColor="#f9fafb" // Default second background color
                subheading="Why Do We Need SMS Module in School Software?"
                paragraphs={[
                    "The SMS module in school software is essential for effective and instant communication between the school, parents, and students.",
                    "It allows schools to send important notifications, reminders, alerts about attendance, exam schedules, fee dues, and events directly to parents’ and students’ mobile phones.",
                    "This real-time communication helps keep everyone informed and engaged, reducing misunderstandings and ensuring timely actions.",
                    "The SMS module also saves administrative time by automating routine messages and enhances parent-school collaboration, contributing to a more connected and responsive educational environment."
                ]}
            />
        </>
    );
};

export default SmsModuleContent;
