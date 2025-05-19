import FeatureCard from '../../../components/Modules/FeatureCard';
import {
  HiOutlineSupport,
  HiOutlineChatAlt2,
  HiOutlineFlag,
  HiOutlineClipboardCheck,
  HiOutlineClock,
  HiOutlineRefresh,
  HiOutlineChartSquareBar,
  HiOutlineEmojiHappy,
  HiOutlineCollection,
} from 'react-icons/hi';

// Define a default gradient class
const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800'; // You can customize this

const supportTicketFeatures = [
  {
    title: 'Efficient Issue Resolution',
    description: 'Provides a structured process to report, track, and resolve issues for students, parents, and staff.',
    icon: HiOutlineSupport,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Clear Communication',
    description: 'Facilitates transparent communication between users and the support team for timely updates and responses.',
    icon: HiOutlineChatAlt2,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Prioritization and Management',
    description: 'Enables support teams to prioritize urgent issues and manage workload efficiently.',
    icon: HiOutlineFlag,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Accountability and Transparency',
    description: 'Logs every step in the resolution process to ensure accountability and provide a clear audit trail.',
    icon: HiOutlineClipboardCheck,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Time-Saving',
    description: 'Automates ticket handling to reduce manual work and streamline resolution workflows.',
    icon: HiOutlineClock,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Real-Time Updates',
    description: 'Provides instant notifications to users and support teams on ticket progress and resolution.',
    icon: HiOutlineRefresh,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Data Insights and Reporting',
    description: 'Generates analytics and reports on support trends, team performance, and resolution times.',
    icon: HiOutlineChartSquareBar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Increased User Satisfaction',
    description: 'Boosts trust and satisfaction with responsive support, transparency, and timely resolution.',
    icon: HiOutlineEmojiHappy,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Centralized Issue Tracking',
    description: 'Consolidates all support requests in one place for better management and follow-up.',
    icon: HiOutlineCollection,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
];

const SupportTicketFeatureCardsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {supportTicketFeatures.map((feature, index) => (
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

export default SupportTicketFeatureCardsSection;
