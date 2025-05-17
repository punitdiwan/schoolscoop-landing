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

export const features = [
  {
    title: 'Centralized Information',
    description: 'Keeps all employee data in one secure and easily accessible location.',
    icon: HiOutlineDatabase,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-blue-700',
  },
  {
    title: 'Automated HR Tasks',
    description: 'Speeds up payroll, attendance, leave, and recruitment processes with automation.',
    icon: HiOutlineClock,
    gradientClass: 'bg-gradient-to-r from-green-500 to-teal-700',
  },
  {
    title: 'Time & Cost Saving',
    description: 'Reduces manual work and paperwork, cutting down administrative overhead.',
    icon: HiOutlinePaperClip,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-orange-700',
  },
  {
    title: 'Improved Accuracy',
    description: 'Minimizes errors in salary processing, tax deductions, and compliance calculations.',
    icon: HiOutlineDocumentReport,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-indigo-700',
  },
  {
    title: 'Performance Tracking',
    description: 'Enables effective monitoring and evaluation of employee performance.',
    icon: HiOutlineTrendingUp,
    gradientClass: 'bg-gradient-to-r from-indigo-500 to-blue-700',
  },
  {
    title: 'Legal Compliance',
    description: 'Ensures HR practices comply with labor laws, tax regulations, and institutional policies.',
    icon: HiOutlineShieldCheck,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
  {
    title: 'Self-Service Access',
    description: 'Allows employees to view payslips, apply for leave, and update their information anytime.',
    icon: HiOutlineUserGroup,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Real-Time Analytics',
    description: 'Provides actionable insights through reports and HR data dashboards.',
    icon: HiOutlineCalendar,
    gradientClass: 'bg-gradient-to-r from-pink-500 to-rose-700',
  },
  {
    title: 'Enhanced Security',
    description: 'Protects sensitive employee information with controlled access and regular backups.',
    icon: HiOutlineShieldCheck,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-yellow-700',
  },
  {
    title: 'Boosted Productivity',
    description: 'Frees HR teams from repetitive tasks so they can focus on talent and strategy.',
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
