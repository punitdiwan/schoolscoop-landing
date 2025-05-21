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

// Define the default gradient class
const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800'; // Adjust this gradient as needed

export const employeeFeatures = [
  {
    title: 'Centralized Employee Data',
    description: 'Easily store and access all employee details in one secure system.',
    icon: HiOutlineDatabase,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Time Savings',
    description: 'Automates routine HR tasks like attendance tracking, payroll processing, and leave management.',
    icon: HiOutlineClock,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Improved Accuracy',
    description: 'Minimizes human errors in data entry, payroll calculations, and compliance reporting.',
    icon: HiOutlineCheckCircle,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Performance Monitoring',
    description: 'Tracks employee performance, providing insights for development and decision-making.',
    icon: HiOutlineTrendingUp,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Streamlined Communication',
    description: 'Enhances communication between HR, management, and employees through centralized platforms.',
    icon: HiOutlineChatAlt2,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Cost Efficiency',
    description: 'Reduces administrative costs by automating manual processes and paperwork.',
    icon: HiOutlineCurrencyDollar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Compliance Assurance',
    description: 'Helps organizations stay compliant with labor laws, tax regulations, and internal policies.',
    icon: HiOutlineShieldCheck,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Employee Engagement',
    description: 'Provides tools for feedback, training, and career development, boosting employee satisfaction.',
    icon: HiOutlineUserCircle,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Security and Privacy',
    description: 'Ensures secure handling and storage of sensitive employee data.',
    icon: HiOutlineLockClosed,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Real-Time Reporting',
    description: 'Generates instant reports on attendance, performance, payroll, and more for better decision-making.',
    icon: HiOutlineChartBar,
    gradientClass: defaultGradientClass, // Use default gradient class
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
