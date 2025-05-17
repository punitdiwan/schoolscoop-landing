// data/features.js
import { HiOutlineDatabase, HiOutlineClock, HiOutlineChat, HiOutlineTrendingUp, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineDocumentReport, HiOutlineCalendar, HiOutlinePaperClip, HiOutlineCloudUpload } from 'react-icons/hi';
import FeatureCard from '../../../components/Modules/FeatureCard';

export const features = [
  {
    title: 'Centralized Data',
    description: 'Store and access all student information (admission details, grades, attendance, etc.) in one place.',
    icon: HiOutlineDatabase,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-blue-700',
  },
  {
    title: 'Time Efficiency',
    description: 'Automates daily administrative tasks, saving valuable time for teachers and staff.',
    icon: HiOutlineClock,
    gradientClass: 'bg-gradient-to-r from-green-500 to-teal-700',
  },
  {
    title: 'Improved Communication',
    description: 'Facilitates real-time updates and communication with parents and students via SMS, email, or apps.',
    icon: HiOutlineChat,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-orange-700',
  },
  {
    title: 'Better Performance Tracking',
    description: 'Monitors and reports student progress, identifying areas that need improvement.',
    icon: HiOutlineTrendingUp,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-indigo-700',
  },
  {
    title: 'Enhanced Security',
    description: 'Ensures safe storage of student data with secure access controls and backup systems.',
    icon: HiOutlineShieldCheck,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
  {
    title: 'Accurate Attendance Management',
    description: 'Tracks attendance automatically, minimizing errors and improving accountability.',
    icon: HiOutlineUserGroup,
    gradientClass: 'bg-gradient-to-r from-indigo-500 to-blue-700',
  },
  {
    title: 'Customizable Reports',
    description: 'Generates tailored reports for students\' academic performance, behavior, and more.',
    icon: HiOutlineDocumentReport,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Streamlined Scheduling',
    description: 'Simplifies timetable management and prevents scheduling conflicts.',
    icon: HiOutlineCalendar,
    gradientClass: 'bg-gradient-to-r from-pink-500 to-rose-700',
  },
  {
    title: 'Paperless Environment',
    description: 'Reduces the need for physical records and documentation, promoting eco-friendly practices.',
    icon: HiOutlinePaperClip,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-yellow-700',
  },
  {
    title: 'Scalability',
    description: 'Supports growth as the school expands, accommodating more students and data.',
    icon: HiOutlineCloudUpload,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-green-700',
  },
];
const FeatureCardsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {features.map((feature, index) => (
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

export default FeatureCardsSection;