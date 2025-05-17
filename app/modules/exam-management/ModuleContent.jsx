import React from 'react';
import ModuleContent from '../../../components/Modules/ModuleContent';

const ManageExamContent = () => {
    return (
        <>
            <ModuleContent
                imageSrc="/module-bg.webp" // Default image
                imagePosition="left"
                backgroundColor="#ffece0" // Default background color
                heading="Manage Exam System"
                subheading="What is a Manage Exam System?"
                paragraphs={[
                    "A Manage Exam System is a digital solution designed to plan, organize, conduct, and evaluate exams efficiently in educational institutions.",
                    "It automates tasks like creating exam schedules, setting question papers, managing seating arrangements, marking, grading, and generating report cards.",
                    "This system helps schools and colleges streamline the examination process, reduce manual errors, ensure timely result publication, and provide transparency to students and parents.",
                    "It can support both offline and online exams, making it a flexible and time-saving tool for academic assessment management."
                ]}
            />
            <ModuleContent
                imageSrc="/module-bg2.png" // Default second image
                imagePosition="right"
                backgroundColor="#f9fafb" // Default second background color
                subheading="Why Do We Need Manage Exam Module in School Software?"
                paragraphs={[
                    "The Manage Exam module in school software is crucial for organizing and simplifying the entire examination process.",
                    "It allows schools to efficiently schedule exams, create and distribute question papers, manage seating arrangements, and record student grades all in one place.",
                    "This module helps reduce manual errors, saves time for teachers and administrators, and ensures a smooth and transparent evaluation process.",
                    "It also enables quick generation of report cards and analysis of student performance, helping educators identify areas for improvement.",
                    "By integrating the exam management module, schools can enhance accuracy, improve communication with students and parents, and create a more organized and stress-free exam environment."
                ]}
            />
        </>
    );
};

export default ManageExamContent;
