import React from 'react';
import ModuleContent from '../../../components/Modules/ModuleContent';

const StudentPromotionContent = () => {
    return (
        <>
            <ModuleContent
                imageSrc="/module-bg.webp" // Default image
                imagePosition="left"
                backgroundColor="#ffece0" // Default background color
                heading="Student Promotion Module"
                subheading="What is a Student Promotion Module?"
                paragraphs={[
                    "A Student Promotion Module is a feature within school management software that automates and manages the process of promoting students from one grade or class to the next based on their academic performance.",
                    "It helps track the eligibility criteria for promotion, calculates results, and generates promotion lists."
                ]}
            />
            <ModuleContent
                imageSrc="/module-bg2.png" // Default second image
                imagePosition="right"
                backgroundColor="#f9fafb" // Default second background color
                subheading="Why Do We Need Student Promotion Module in School Software?"
                paragraphs={[
                    "The Student Promotion module in school software is essential for efficiently managing the process of advancing students from one grade or class to the next.",
                    "It automates the evaluation of student performance based on grades, attendance, and other criteria, ensuring a fair and consistent promotion system.",
                    "This module helps reduce administrative errors, saves time for school staff, and provides clear records of student progress.",
                    "Additionally, it allows schools to generate promotion reports and communicate decisions to parents smoothly.",
                    "By using a student promotion module, schools can streamline academic progression, maintain transparency, and support better planning for each student’s educational journey."
                ]}
            />
        </>
    );
};

export default StudentPromotionContent;
