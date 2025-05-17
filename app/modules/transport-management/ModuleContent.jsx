import React from 'react';
import ModuleContent from '../../../components/Modules/ModuleContent';

const TransportationContent = () => {
    return (
        <>
            <ModuleContent
                imageSrc="/module-bg.webp" // Default image
                imagePosition="left"
                backgroundColor="#ffece0" // Default background color
                heading="Transportation Management System"
                subheading="What is a Transportation Management System?"
                paragraphs={[
                    "A Transportation Management System (TMS) in a school setting is a software solution that helps manage and monitor school transport operations efficiently.",
                    "It automates tasks like route planning, vehicle tracking, driver management, student pick-up/drop-off points, and transport fee collection.",
                    "This system improves safety, ensures timely transportation, provides real-time tracking for parents, and simplifies vehicle and staff management for the school.",
                    "It enhances overall operational efficiency, transparency, and communication in managing school transportation."
                ]}
            />
            <ModuleContent
                imageSrc="/module-bg2.png" // Default second image
                imagePosition="right"
                backgroundColor="#f9fafb" // Default second background color
                subheading="Why Do We Need Transportation Management Module in School Software?"
                paragraphs={[
                    "The Transportation Management module in school software is essential for ensuring the safe, efficient, and organized transport of students.",
                    "It helps schools plan and manage bus routes, track vehicle locations in real-time, schedule pick-ups and drop-offs, and maintain records of drivers and vehicles.",
                    "This module improves communication with parents by providing updates on bus timings and student attendance during transit.",
                    "It also enhances safety by monitoring transport operations and helps optimize fuel and maintenance costs.",
                    "By integrating transportation management into school software, institutions can provide a reliable and secure travel experience for students while streamlining administrative tasks related to school transport."
                ]}
            />
        </>
    );
};

export default TransportationContent;
