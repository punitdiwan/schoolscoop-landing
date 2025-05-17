import {
  HiOutlineBell,
  HiOutlineChatAlt2,
  HiOutlineSpeakerphone,
  HiOutlineCurrencyDollar,
  HiOutlineExclamation,
  HiOutlineEye,
  HiOutlineDeviceMobile,
  HiOutlineClock,
  HiOutlineUserRemove,
  HiOutlineCalendar,
} from 'react-icons/hi';
import FeatureCard from '../../../components/Modules/FeatureCard';

export const communicationFeatures = [
  {
    title: 'Instant Notifications',
    description: 'Delivers real-time updates, ensuring parents, students, and staff are promptly informed about important events or emergencies.',
    icon: HiOutlineBell,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-indigo-700',
  },
  {
    title: 'Enhanced Parent-Teacher Communication',
    description: 'Allows seamless communication between the school and parents about attendance, grades, and upcoming activities.',
    icon: HiOutlineChatAlt2,
    gradientClass: 'bg-gradient-to-r from-green-500 to-teal-700',
  },
  {
    title: 'Improved Student Engagement',
    description: 'Keeps students updated on exam schedules, assignments, and school events, encouraging active participation.',
    icon: HiOutlineSpeakerphone,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-pink-700',
  },
  {
    title: 'Cost-Effective',
    description: 'SMS is a low-cost solution for communication compared to phone calls or physical notices.',
    icon: HiOutlineCurrencyDollar,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-amber-700',
  },
  {
    title: 'Emergency Alerts',
    description: 'Enables immediate communication during emergencies, such as school closures, ensuring all stakeholders are informed swiftly.',
    icon: HiOutlineExclamation,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
  {
    title: 'Increased Transparency',
    description: 'Ensures that parents are kept in the loop on critical matters like fees, results, and school events.',
    icon: HiOutlineEye,
    gradientClass: 'bg-gradient-to-r from-indigo-500 to-blue-700',
  },
  {
    title: 'Accessibility',
    description: 'SMS messages are accessible on all mobile phones, ensuring everyone can receive important information, regardless of internet access.',
    icon: HiOutlineDeviceMobile,
    gradientClass: 'bg-gradient-to-r from-gray-600 to-gray-800',
  },
  {
    title: 'Time-Saving',
    description: 'Automates routine notifications, saving time for school staff and streamlining communication tasks.',
    icon: HiOutlineClock,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-green-700',
  },
  {
    title: 'Attendance Monitoring',
    description: 'Notifies parents of absenteeism or irregular attendance, helping to keep track of students’ presence in school.',
    icon: HiOutlineUserRemove,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Event Reminders',
    description: 'Sends reminders for upcoming events, exams, or deadlines, ensuring no important dates are missed.',
    icon: HiOutlineCalendar,
    gradientClass: 'bg-gradient-to-r from-pink-500 to-rose-700',
  },
];

const SmsFeatureCardsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {communicationFeatures.map((feature, index) => (
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

export default SmsFeatureCardsSection;
