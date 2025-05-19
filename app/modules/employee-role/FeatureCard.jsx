import {
  HiOutlineShieldCheck,
  HiOutlineUserCircle,
  HiOutlineLightningBolt,
  HiOutlineAdjustments,
  HiOutlineClipboardCheck,
  HiOutlineKey,
  HiOutlineCog,
  HiOutlineTrendingUp,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import FeatureCard from '../../../components/Modules/FeatureCard';

// Define the default gradient class
const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800'; // Adjust the gradient as needed

export const employeeRoleFeatures = [
  {
    title: 'Enhanced Data Security',
    description: 'Assigning specific roles ensures sensitive data like student records and financials is only accessed by authorized personnel.',
    icon: HiOutlineShieldCheck,
    gradientClass: defaultGradientClass, // Use the default gradient class
  },
  {
    title: 'Streamlined Role Management',
    description: 'Simplifies assigning, managing, and updating employee roles based on responsibilities for better organization.',
    icon: HiOutlineUserCircle,
    gradientClass: defaultGradientClass, // Use the default gradient class
  },
  {
    title: 'Improved Efficiency',
    description: 'Clear roles allow staff to focus on specific tasks, boosting productivity and operational flow.',
    icon: HiOutlineLightningBolt,
    gradientClass: defaultGradientClass, // Use the default gradient class
  },
  {
    title: 'Customization and Flexibility',
    description: 'Administrators can tailor roles for various staff types, adapting to any organizational structure.',
    icon: HiOutlineAdjustments,
    gradientClass: defaultGradientClass, // Use the default gradient class
  },
  {
    title: 'Clear Accountability',
    description: 'Defined roles help track individual responsibilities, monitor performance, and promote accountability.',
    icon: HiOutlineClipboardCheck,
    gradientClass: defaultGradientClass, // Use the default gradient class
  },
  {
    title: 'Access Control',
    description: 'Fine-tuned data and feature access ensures employees only view what is relevant to their role.',
    icon: HiOutlineKey,
    gradientClass: defaultGradientClass, // Use the default gradient class
  },
  {
    title: 'Simplified System Management',
    description: 'Centralized permission settings reduce workload for admins and ensure consistency across the system.',
    icon: HiOutlineCog,
    gradientClass: defaultGradientClass, // Use the default gradient class
  },
  {
    title: 'Scalability',
    description: 'The system supports growth by easily integrating new roles and structures without disruption.',
    icon: HiOutlineTrendingUp,
    gradientClass: defaultGradientClass, // Use the default gradient class
  },
  {
    title: 'Improved Collaboration',
    description: 'Defined responsibilities streamline communication and coordination across departments.',
    icon: HiOutlineUserGroup,
    gradientClass: defaultGradientClass, // Use the default gradient class
  },
];

const EmployeeRoleFeatureCardsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {employeeRoleFeatures.map((feature, index) => (
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

export default EmployeeRoleFeatureCardsSection;
