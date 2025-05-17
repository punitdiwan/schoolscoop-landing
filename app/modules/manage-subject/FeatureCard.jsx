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

export const subjectFeatures = [
  {
    title: 'Efficient Subject Organization',
    description: 'Allows easy management of subjects, ensuring proper allocation and distribution across classes.',
    icon: HiOutlineBookOpen,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-indigo-700',
  },
  {
    title: 'Timetable Optimization',
    description: 'Helps create and manage timetables without conflicts, ensuring balanced schedules.',
    icon: HiOutlineCalendar,
    gradientClass: 'bg-gradient-to-r from-green-500 to-teal-700',
  },
  {
    title: 'Teacher Workload Management',
    description: 'Enables schools to assign teachers to subjects based on their expertise and availability.',
    icon: HiOutlineUserGroup,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-pink-700',
  },
  {
    title: 'Track Syllabus Progress',
    description: 'Facilitates monitoring of subject-wise syllabus coverage, ensuring timely completion.',
    icon: HiOutlineClipboardList,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-orange-700',
  },
  {
    title: 'Centralized Data',
    description: 'Stores all subject-related information in one place for easy access and management.',
    icon: HiOutlineDatabase,
    gradientClass: 'bg-gradient-to-r from-gray-600 to-gray-800',
  },
  {
    title: 'Improved Academic Planning',
    description: 'Simplifies curriculum planning by managing subject requirements and updates.',
    icon: HiOutlineAcademicCap,
    gradientClass: 'bg-gradient-to-r from-indigo-500 to-blue-700',
  },
  {
    title: 'Clear Reporting',
    description: 'Provides reports on subject assignments, teacher allocations, and academic performance.',
    icon: HiOutlineDocumentReport,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Customizable Options',
    description: 'Schools can add, modify, or delete subjects according to curriculum needs or changes.',
    icon: HiOutlineAdjustments,
    gradientClass: 'bg-gradient-to-r from-pink-500 to-rose-700',
  },
  {
    title: 'Enhanced Communication',
    description: 'Improves coordination between teachers, students, and administrators about subject matters.',
    icon: HiOutlineChat,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
  {
    title: 'Resource Optimization',
    description: 'Helps allocate teaching materials and classrooms more effectively for each subject.',
    icon: HiOutlineCollection,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-green-700',
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
