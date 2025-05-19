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

// Define a default gradient class
const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800'; // Customize this as needed

export const communicationFeatures = [
  {
    title: 'Instant Notifications',
    description: 'Delivers real-time updates, ensuring parents, students, and staff are promptly informed about important events or emergencies.',
    icon: HiOutlineBell,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Enhanced Parent-Teacher Communication',
    description: 'Allows seamless communication between the school and parents about attendance, grades, and upcoming activities.',
    icon: HiOutlineChatAlt2,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Improved Student Engagement',
    description: 'Keeps students updated on exam schedules, assignments, and school events, encouraging active participation.',
    icon: HiOutlineSpeakerphone,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Cost-Effective',
    description: 'SMS is a low-cost solution for communication compared to phone calls or physical notices.',
    icon: HiOutlineCurrencyDollar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Emergency Alerts',
    description: 'Enables immediate communication during emergencies, such as school closures, ensuring all stakeholders are informed swiftly.',
    icon: HiOutlineExclamation,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Increased Transparency',
    description: 'Ensures that parents are kept in the loop on critical matters like fees, results, and school events.',
    icon: HiOutlineEye,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Accessibility',
    description: 'SMS messages are accessible on all mobile phones, ensuring everyone can receive important information, regardless of internet access.',
    icon: HiOutlineDeviceMobile,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Time-Saving',
    description: 'Automates routine notifications, saving time for school staff and streamlining communication tasks.',
    icon: HiOutlineClock,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Attendance Monitoring',
    description: 'Notifies parents of absenteeism or irregular attendance, helping to keep track of students’ presence in school.',
    icon: HiOutlineUserRemove,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Event Reminders',
    description: 'Sends reminders for upcoming events, exams, or deadlines, ensuring no important dates are missed.',
    icon: HiOutlineCalendar,
    gradientClass: defaultGradientClass, // Use default gradient class
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
