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

export const employeeRoleFeatures = [
  {
    title: 'Enhanced Data Security',
    description: 'Assigning specific roles ensures sensitive data like student records and financials is only accessed by authorized personnel.',
    icon: HiOutlineShieldCheck,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
  {
    title: 'Streamlined Role Management',
    description: 'Simplifies assigning, managing, and updating employee roles based on responsibilities for better organization.',
    icon: HiOutlineUserCircle,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-indigo-700',
  },
  {
    title: 'Improved Efficiency',
    description: 'Clear roles allow staff to focus on specific tasks, boosting productivity and operational flow.',
    icon: HiOutlineLightningBolt,
    gradientClass: 'bg-gradient-to-r from-green-500 to-emerald-700',
  },
  {
    title: 'Customization and Flexibility',
    description: 'Administrators can tailor roles for various staff types, adapting to any organizational structure.',
    icon: HiOutlineAdjustments,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-pink-700',
  },
  {
    title: 'Clear Accountability',
    description: 'Defined roles help track individual responsibilities, monitor performance, and promote accountability.',
    icon: HiOutlineClipboardCheck,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-orange-700',
  },
  {
    title: 'Access Control',
    description: 'Fine-tuned data and feature access ensures employees only view what is relevant to their role.',
    icon: HiOutlineKey,
    gradientClass: 'bg-gradient-to-r from-gray-600 to-gray-800',
  },
  {
    title: 'Simplified System Management',
    description: 'Centralized permission settings reduce workload for admins and ensure consistency across the system.',
    icon: HiOutlineCog,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Scalability',
    description: 'The system supports growth by easily integrating new roles and structures without disruption.',
    icon: HiOutlineTrendingUp,
    gradientClass: 'bg-gradient-to-r from-indigo-500 to-blue-700',
  },
  {
    title: 'Improved Collaboration',
    description: 'Defined responsibilities streamline communication and coordination across departments.',
    icon: HiOutlineUserGroup,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-green-700',
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
