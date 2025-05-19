import {
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlineClipboardList,
  HiOutlineDatabase,
  HiOutlineAcademicCap,
  HiOutlineDocumentReport,
  HiOutlineAdjustments,
  HiOutlineChat,
  HiOutlineCollection,
} from 'react-icons/hi';
import FeatureCard from '../../../components/Modules/FeatureCard';

// Define a default gradient class
const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800'; // Customize as needed

export const subjectFeatures = [
  {
    title: 'Efficient Subject Organization',
    description: 'Allows easy management of subjects, ensuring proper allocation and distribution across classes.',
    icon: HiOutlineBookOpen,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Timetable Optimization',
    description: 'Helps create and manage timetables without conflicts, ensuring balanced schedules.',
    icon: HiOutlineCalendar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Teacher Workload Management',
    description: 'Enables schools to assign teachers to subjects based on their expertise and availability.',
    icon: HiOutlineUserGroup,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Track Syllabus Progress',
    description: 'Facilitates monitoring of subject-wise syllabus coverage, ensuring timely completion.',
    icon: HiOutlineClipboardList,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Centralized Data',
    description: 'Stores all subject-related information in one place for easy access and management.',
    icon: HiOutlineDatabase,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Improved Academic Planning',
    description: 'Simplifies curriculum planning by managing subject requirements and updates.',
    icon: HiOutlineAcademicCap,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Clear Reporting',
    description: 'Provides reports on subject assignments, teacher allocations, and academic performance.',
    icon: HiOutlineDocumentReport,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Customizable Options',
    description: 'Schools can add, modify, or delete subjects according to curriculum needs or changes.',
    icon: HiOutlineAdjustments,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Enhanced Communication',
    description: 'Improves coordination between teachers, students, and administrators about subject matters.',
    icon: HiOutlineChat,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Resource Optimization',
    description: 'Helps allocate teaching materials and classrooms more effectively for each subject.',
    icon: HiOutlineCollection,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
];

const SubjectFeatureCardsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {subjectFeatures.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          Icon={feature.icon}
          gradientClass={feature.gradientClass}
        />
      ))}
    </section>
  );
};

export default SubjectFeatureCardsSection;
