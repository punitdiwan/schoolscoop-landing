import {
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineDocumentReport,
  HiOutlineDesktopComputer,
  HiOutlineTrendingUp,
  HiOutlineAdjustments,
  HiOutlineDatabase,
  HiOutlineUserGroup,
  HiOutlineClock,
  HiOutlineEye,
} from 'react-icons/hi';
import FeatureCard from '../../../components/Modules/FeatureCard';

export const examFeatures = [
  {
    title: 'Automated Exam Scheduling',
    description: 'Easily plan and organize exam dates, subjects, and timings.',
    icon: HiOutlineCalendar,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-indigo-700',
  },
  {
    title: 'Error-Free Marks Entry',
    description: 'Reduces mistakes in score entry, grading, and calculations.',
    icon: HiOutlineCheckCircle,
    gradientClass: 'bg-gradient-to-r from-green-500 to-emerald-700',
  },
  {
    title: 'Instant Report Cards',
    description: 'Generates professional and accurate results quickly.',
    icon: HiOutlineDocumentReport,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-amber-700',
  },
  {
    title: 'Supports Online & Offline Exams',
    description: 'Flexible for both traditional and digital assessments.',
    icon: HiOutlineDesktopComputer,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-pink-700',
  },
  {
    title: 'Real-Time Performance Tracking',
    description: 'Monitor student progress and academic trends.',
    icon: HiOutlineTrendingUp,
    gradientClass: 'bg-gradient-to-r from-indigo-500 to-blue-700',
  },
  {
    title: 'Custom Grading Systems',
    description: 'Allows personalized grading formats as per school standards.',
    icon: HiOutlineAdjustments,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Centralized Record Management',
    description: 'Stores exam data securely in one place for easy access.',
    icon: HiOutlineDatabase,
    gradientClass: 'bg-gradient-to-r from-gray-600 to-gray-800',
  },
  {
    title: 'Parent & Student Access',
    description: 'Provides timely result updates through portals or mobile apps.',
    icon: HiOutlineUserGroup,
    gradientClass: 'bg-gradient-to-r from-pink-500 to-rose-700',
  },
  {
    title: 'Saves Time & Effort',
    description: 'Reduces manual work for teachers and admin staff.',
    icon: HiOutlineClock,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-green-700',
  },
  {
    title: 'Improves Transparency & Accuracy',
    description: 'Builds trust with students and parents through clear, reliable reporting.',
    icon: HiOutlineEye,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
];

const ExamFeatureCardsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {examFeatures.map((feature, index) => (
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

export default ExamFeatureCardsSection;
