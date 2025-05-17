import FeatureCard from '../../../components/Modules/FeatureCard';  // Removed the duplicate import
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

const supportTicketFeatures = [
  {
    title: 'Efficient Issue Resolution',
    description: 'Provides a structured process to report, track, and resolve issues for students, parents, and staff.',
    icon: HiOutlineSupport,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-indigo-700',
  },
  {
    title: 'Clear Communication',
    description: 'Facilitates transparent communication between users and the support team for timely updates and responses.',
    icon: HiOutlineChatAlt2,
    gradientClass: 'bg-gradient-to-r from-green-500 to-teal-700',
  },
  {
    title: 'Prioritization and Management',
    description: 'Enables support teams to prioritize urgent issues and manage workload efficiently.',
    icon: HiOutlineFlag,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-orange-700',
  },
  {
    title: 'Accountability and Transparency',
    description: 'Logs every step in the resolution process to ensure accountability and provide a clear audit trail.',
    icon: HiOutlineClipboardCheck,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
  {
    title: 'Time-Saving',
    description: 'Automates ticket handling to reduce manual work and streamline resolution workflows.',
    icon: HiOutlineClock,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-pink-700',
  },
  {
    title: 'Real-Time Updates',
    description: 'Provides instant notifications to users and support teams on ticket progress and resolution.',
    icon: HiOutlineRefresh,
    gradientClass: 'bg-gradient-to-r from-indigo-500 to-blue-700',
  },
  {
    title: 'Data Insights and Reporting',
    description: 'Generates analytics and reports on support trends, team performance, and resolution times.',
    icon: HiOutlineChartSquareBar,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Increased User Satisfaction',
    description: 'Boosts trust and satisfaction with responsive support, transparency, and timely resolution.',
    icon: HiOutlineEmojiHappy,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-green-700',
  },
  {
    title: 'Centralized Issue Tracking',
    description: 'Consolidates all support requests in one place for better management and follow-up.',
    icon: HiOutlineCollection,
    gradientClass: 'bg-gradient-to-r from-gray-600 to-gray-800',
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
