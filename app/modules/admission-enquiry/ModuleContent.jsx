import React from 'react';
import ModuleContent from '../../../components/Modules/ModuleContent';

const AdmissionContent = () => {
    return (
        <>
            <ModuleContent
                imageSrc="/module-bg.webp" // Default image
                imagePosition="left"
                backgroundColor="#ffece0" // Default background color
                heading="Admission Enquiry Module"
                subheading="What is an Admission Enquiry Module?"
                paragraphs={[
                    "The Admission Enquiry Module in school software is a feature that helps manage and streamline the process of receiving, tracking, and responding to inquiries from prospective students and their families.",
                    "It allows schools to efficiently capture details about students who are interested in enrolling, providing them with necessary information and updates throughout the admission process."
                ]}
            />
            <ModuleContent
                imageSrc="/module-bg2.png" // Default second image
                imagePosition="right"
                backgroundColor="#f9fafb" // Default second background color
                subheading="Why Do We Need Admission Enquiry Module in School Software?"
                paragraphs={[
                    "The Admission Enquiry module in school software is essential for efficiently managing and tracking prospective student inquiries.",
                    "It helps schools capture and organize information from parents and students interested in admission, ensuring no inquiry is missed or overlooked.",
                    "This module streamlines the follow-up process by allowing staff to respond promptly, schedule visits or interviews, and provide timely updates.",
                    "By automating admission enquiries, schools improve communication, increase enrollment efficiency, and create a positive first impression for prospective families.",
                    "Overall, it supports a smoother admission process and better management of new student intake."
                ]}
            />
        </>
    );
};

export default AdmissionContent;
