import FeatureCard from '../../../components/Modules/FeatureCard';
import {
  HiOutlineLocationMarker,
  HiOutlineMap,
  HiOutlineShieldCheck,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardCheck,
  HiOutlineBell,
  HiOutlineTruck,
  HiOutlineChat,
  HiOutlineDatabase,
  HiOutlineClock,
} from 'react-icons/hi';

// Define a default gradient class for consistency
const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800';

export const transportFeatures = [
  {
    title: 'Real-Time Tracking',
    description: 'Parents and administrators can track buses in real time for better security and convenience.',
    icon: HiOutlineLocationMarker,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Optimized Routes',
    description: 'Efficient route planning saves time, fuel, and transportation costs.',
    icon: HiOutlineMap,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Improved Safety',
    description: 'Monitors vehicle speed, routes, and stops to ensure student safety.',
    icon: HiOutlineShieldCheck,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Automated Fee Management',
    description: 'Simplifies transport fee collection, invoicing, and record-keeping.',
    icon: HiOutlineCurrencyDollar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Accurate Pickup/Drop Records',
    description: 'Ensures accurate student attendance and monitoring during transport.',
    icon: HiOutlineClipboardCheck,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Instant Alerts & Notifications',
    description: 'Sends SMS/email updates about delays, pick-up/drop-off times, or emergencies.',
    icon: HiOutlineBell,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Driver & Vehicle Management',
    description: 'Tracks driver details, vehicle status, maintenance schedules, and licenses.',
    icon: HiOutlineTruck,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Enhanced Communication',
    description: 'Easy communication between parents, drivers, and school admins for smooth operations.',
    icon: HiOutlineChat,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Centralized Data',
    description: 'All transport-related information is stored in one accessible platform.',
    icon: HiOutlineDatabase,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Time-Saving Automation',
    description: 'Reduces manual tasks and administrative workload for school staff.',
    icon: HiOutlineClock,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
];

const TransportFeatureCardsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {transportFeatures.map((feature, index) => (
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

export default TransportFeatureCardsSection;
