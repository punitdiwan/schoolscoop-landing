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
import FeatureCard from '../../../components/Modules/FeatureCard';

export const transportFeatures = [
  {
    title: 'Real-Time Tracking',
    description: 'Parents and administrators can track buses in real time for better security and convenience.',
    icon: HiOutlineLocationMarker,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-indigo-700',
  },
  {
    title: 'Optimized Routes',
    description: 'Efficient route planning saves time, fuel, and transportation costs.',
    icon: HiOutlineMap,
    gradientClass: 'bg-gradient-to-r from-green-500 to-emerald-700',
  },
  {
    title: 'Improved Safety',
    description: 'Monitors vehicle speed, routes, and stops to ensure student safety.',
    icon: HiOutlineShieldCheck,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
  {
    title: 'Automated Fee Management',
    description: 'Simplifies transport fee collection, invoicing, and record-keeping.',
    icon: HiOutlineCurrencyDollar,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-amber-700',
  },
  {
    title: 'Accurate Pickup/Drop Records',
    description: 'Ensures accurate student attendance and monitoring during transport.',
    icon: HiOutlineClipboardCheck,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-pink-700',
  },
  {
    title: 'Instant Alerts & Notifications',
    description: 'Sends SMS/email updates about delays, pick-up/drop-off times, or emergencies.',
    icon: HiOutlineBell,
    gradientClass: 'bg-gradient-to-r from-orange-500 to-red-600',
  },
  {
    title: 'Driver & Vehicle Management',
    description: 'Tracks driver details, vehicle status, maintenance schedules, and licenses.',
    icon: HiOutlineTruck,
    gradientClass: 'bg-gradient-to-r from-gray-600 to-gray-800',
  },
  {
    title: 'Enhanced Communication',
    description: 'Easy communication between parents, drivers, and school admins for smooth operations.',
    icon: HiOutlineChat,
    gradientClass: 'bg-gradient-to-r from-pink-500 to-rose-700',
  },
  {
    title: 'Centralized Data',
    description: 'All transport-related information is stored in one accessible platform.',
    icon: HiOutlineDatabase,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Time-Saving Automation',
    description: 'Reduces manual tasks and administrative workload for school staff.',
    icon: HiOutlineClock,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-green-700',
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
