import React from 'react';
import ModuleContent from '../../../components/Modules/ModuleContent';

const StudentContent = () => {
    return (
        <>
            <ModuleContent
                imageSrc="/module-bg.webp" // Replace with your actual image path
                imagePosition="left"
                backgroundColor="#ffece0"
                heading="Student Management System"
                subheading="What is a Student Management System?"
                paragraphs={[
                    "A Student Management System (SMS) is a digital platform that helps educational institutions efficiently manage and organize student-related data and activities. It centralizes information like admissions, attendance, grades, timetables, performance reports, and communication with parents.",
                    "This system streamlines administrative tasks, reduces paperwork, improves accuracy, and allows teachers and staff to focus more on student development. It also enhances communication between schools, students, and parents through online portals and mobile apps."
                ]}
            />
            <ModuleContent
                imageSrc="/module-bg2.png" // Replace with your actual image path
                imagePosition="right"
                backgroundColor="#f9fafb"
                subheading="Why Do We Need Student Management Software?"
                paragraphs={[
                    "Student Management Software is essential for modern educational institutions to efficiently manage and streamline administrative and academic processes. It centralizes student data, including attendance, grades, admissions, and communication, reducing the need for manual record-keeping and minimizing errors.",
                    "With real-time access to information, teachers, administrators, students, and parents can stay informed and connected. The software also enhances productivity by automating routine tasks like fee collection, report generation, and timetable scheduling.",
                    "Ultimately, it helps institutions operate more effectively, improves decision-making through data insights, and creates a more organized and transparent educational environment.",
                    "In essence, Student Management Software helps educational institutions operate more smoothly, saving time and resources while providing better service to students and parents."
                ]}
            />
        </>
    );
};

export default StudentContent;
