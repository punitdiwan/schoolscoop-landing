import {
  HiOutlineDatabase,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineTrendingUp,
  HiOutlineChatAlt2,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineUserCircle,
  HiOutlineLockClosed,
  HiOutlineChartBar,
} from 'react-icons/hi';
import FeatureCard from '../../../components/Modules/FeatureCard';

export const employeeFeatures = [
  {
    title: 'Centralized Employee Data',
    description: 'Easily store and access all employee details in one secure system.',
    icon: HiOutlineDatabase,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-blue-700',
  },
  {
    title: 'Time Savings',
    description: 'Automates routine HR tasks like attendance tracking, payroll processing, and leave management.',
    icon: HiOutlineClock,
    gradientClass: 'bg-gradient-to-r from-green-500 to-emerald-700',
  },
  {
    title: 'Improved Accuracy',
    description: 'Minimizes human errors in data entry, payroll calculations, and compliance reporting.',
    icon: HiOutlineCheckCircle,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-amber-700',
  },
  {
    title: 'Performance Monitoring',
    description: 'Tracks employee performance, providing insights for development and decision-making.',
    icon: HiOutlineTrendingUp,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-indigo-700',
  },
  {
    title: 'Streamlined Communication',
    description: 'Enhances communication between HR, management, and employees through centralized platforms.',
    icon: HiOutlineChatAlt2,
    gradientClass: 'bg-gradient-to-r from-pink-500 to-rose-700',
  },
  {
    title: 'Cost Efficiency',
    description: 'Reduces administrative costs by automating manual processes and paperwork.',
    icon: HiOutlineCurrencyDollar,
    gradientClass: 'bg-gradient-to-r from-indigo-500 to-blue-700',
  },
  {
    title: 'Compliance Assurance',
    description: 'Helps organizations stay compliant with labor laws, tax regulations, and internal policies.',
    icon: HiOutlineShieldCheck,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
  {
    title: 'Employee Engagement',
    description: 'Provides tools for feedback, training, and career development, boosting employee satisfaction.',
    icon: HiOutlineUserCircle,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Security and Privacy',
    description: 'Ensures secure handling and storage of sensitive employee data.',
    icon: HiOutlineLockClosed,
    gradientClass: 'bg-gradient-to-r from-gray-600 to-gray-800',
  },
  {
    title: 'Real-Time Reporting',
    description: 'Generates instant reports on attendance, performance, payroll, and more for better decision-making.',
    icon: HiOutlineChartBar,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-green-700',
  },
];

const FeatureCardsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {employeeFeatures.map((feature, index) => (
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
