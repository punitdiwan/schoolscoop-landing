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

const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800'; // Define your default gradient here

export const examFeatures = [
  {
    title: 'Automated Exam Scheduling',
    description: 'Easily plan and organize exam dates, subjects, and timings.',
    icon: HiOutlineCalendar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Error-Free Marks Entry',
    description: 'Reduces mistakes in score entry, grading, and calculations.',
    icon: HiOutlineCheckCircle,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Instant Report Cards',
    description: 'Generates professional and accurate results quickly.',
    icon: HiOutlineDocumentReport,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Supports Online & Offline Exams',
    description: 'Flexible for both traditional and digital assessments.',
    icon: HiOutlineDesktopComputer,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Real-Time Performance Tracking',
    description: 'Monitor student progress and academic trends.',
    icon: HiOutlineTrendingUp,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Custom Grading Systems',
    description: 'Allows personalized grading formats as per school standards.',
    icon: HiOutlineAdjustments,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Centralized Record Management',
    description: 'Stores exam data securely in one place for easy access.',
    icon: HiOutlineDatabase,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Parent & Student Access',
    description: 'Provides timely result updates through portals or mobile apps.',
    icon: HiOutlineUserGroup,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Saves Time & Effort',
    description: 'Reduces manual work for teachers and admin staff.',
    icon: HiOutlineClock,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Improves Transparency & Accuracy',
    description: 'Builds trust with students and parents through clear, reliable reporting.',
    icon: HiOutlineEye,
    gradientClass: defaultGradientClass, // Use default gradient class
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
