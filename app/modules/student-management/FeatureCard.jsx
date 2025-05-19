import { 
  HiOutlineDatabase, 
  HiOutlineClock, 
  HiOutlineChat, 
  HiOutlineTrendingUp, 
  HiOutlineShieldCheck, 
  HiOutlineUserGroup, 
  HiOutlineDocumentReport, 
  HiOutlineCalendar, 
  HiOutlinePaperClip, 
  HiOutlineCloudUpload 
} from 'react-icons/hi';
import FeatureCard from '../../../components/Modules/FeatureCard';

// Define a default gradient class
const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800'; // Customize as needed

export const features = [
  {
    title: 'Centralized Data',
    description: 'Store and access all student information (admission details, grades, attendance, etc.) in one place.',
    icon: HiOutlineDatabase,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Time Efficiency',
    description: 'Automates daily administrative tasks, saving valuable time for teachers and staff.',
    icon: HiOutlineClock,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Improved Communication',
    description: 'Facilitates real-time updates and communication with parents and students via SMS, email, or apps.',
    icon: HiOutlineChat,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Better Performance Tracking',
    description: 'Monitors and reports student progress, identifying areas that need improvement.',
    icon: HiOutlineTrendingUp,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Enhanced Security',
    description: 'Ensures safe storage of student data with secure access controls and backup systems.',
    icon: HiOutlineShieldCheck,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Accurate Attendance Management',
    description: 'Tracks attendance automatically, minimizing errors and improving accountability.',
    icon: HiOutlineUserGroup,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Customizable Reports',
    description: 'Generates tailored reports for students\' academic performance, behavior, and more.',
    icon: HiOutlineDocumentReport,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Streamlined Scheduling',
    description: 'Simplifies timetable management and prevents scheduling conflicts.',
    icon: HiOutlineCalendar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Paperless Environment',
    description: 'Reduces the need for physical records and documentation, promoting eco-friendly practices.',
    icon: HiOutlinePaperClip,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Scalability',
    description: 'Supports growth as the school expands, accommodating more students and data.',
    icon: HiOutlineCloudUpload,
    gradientClass: defaultGradientClass, // Use default gradient class
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
