// data/features.js

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
  HiOutlineCloudUpload,
} from 'react-icons/hi';
import FeatureCard from '../../../components/Modules/FeatureCard';

// Define a default gradient class
const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800'; // Customize as needed

export const features = [
  {
    title: 'Centralized Information',
    description: 'Keeps all employee data in one secure and easily accessible location.',
    icon: HiOutlineDatabase,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Automated HR Tasks',
    description: 'Speeds up payroll, attendance, leave, and recruitment processes with automation.',
    icon: HiOutlineClock,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Time & Cost Saving',
    description: 'Reduces manual work and paperwork, cutting down administrative overhead.',
    icon: HiOutlinePaperClip,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Improved Accuracy',
    description: 'Minimizes errors in salary processing, tax deductions, and compliance calculations.',
    icon: HiOutlineDocumentReport,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Performance Tracking',
    description: 'Enables effective monitoring and evaluation of employee performance.',
    icon: HiOutlineTrendingUp,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Legal Compliance',
    description: 'Ensures HR practices comply with labor laws, tax regulations, and institutional policies.',
    icon: HiOutlineShieldCheck,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Self-Service Access',
    description: 'Allows employees to view payslips, apply for leave, and update their information anytime.',
    icon: HiOutlineUserGroup,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Real-Time Analytics',
    description: 'Provides actionable insights through reports and HR data dashboards.',
    icon: HiOutlineCalendar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Enhanced Security',
    description: 'Protects sensitive employee information with controlled access and regular backups.',
    icon: HiOutlineShieldCheck,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Boosted Productivity',
    description: 'Frees HR teams from repetitive tasks so they can focus on talent and strategy.',
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
