import FeatureCard from '../../../components/Modules/FeatureCard';
import {
  HiOutlineClipboardList,
  HiOutlineClock,
  HiOutlineMail,
  HiOutlineTrendingUp,
  HiOutlineUserAdd,
  HiOutlineChartBar,
  HiOutlineTag,
  HiOutlineUserGroup,
  HiOutlineDatabase,
} from 'react-icons/hi';

const admissionFeatures = [
  {
    title: 'Organized Inquiry Management',
    description: 'All incoming inquiries are stored in one place, allowing the school to track, manage, and respond efficiently.',
    icon: HiOutlineClipboardList,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-indigo-700',
  },
  {
    title: 'Improved Follow-up Process',
    description: 'Automated reminders and follow-up tracking ensure no inquiry is overlooked, leading to timely responses.',
    icon: HiOutlineClock,
    gradientClass: 'bg-gradient-to-r from-green-500 to-teal-700',
  },
  {
    title: 'Enhanced Communication',
    description: 'Provides seamless communication with automated email responses and real-time updates, keeping the enquirer informed.',
    icon: HiOutlineMail,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-orange-700',
  },
  {
    title: 'Increased Conversion Rates',
    description: 'Streamlines follow-ups and nurturing of leads, converting more inquiries into actual admissions.',
    icon: HiOutlineTrendingUp,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-indigo-700',
  },
  {
    title: 'Time Efficiency',
    description: 'Automates routine tasks such as acknowledgment emails, follow-up reminders, and generating reports, saving time.',
    icon: HiOutlineClock,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
  {
    title: 'Real-Time Data and Reporting',
    description: 'Generates reports on inquiry sources, demographics, and conversion rates to help analyze and improve the admissions process.',
    icon: HiOutlineChartBar,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Better Lead Tracking',
    description: 'Tracks the source of each inquiry, allowing schools to evaluate marketing campaigns and optimize future efforts.',
    icon: HiOutlineTag,
    gradientClass: 'bg-gradient-to-r from-indigo-500 to-blue-700',
  },
  {
    title: 'Personalized Service',
    description: 'Provides tailored experiences for each inquiry, increasing the chances of successful enrollment.',
    icon: HiOutlineUserGroup,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-green-700',
  },
  {
    title: 'Improved Decision Making',
    description: 'Helps administrators make data-driven decisions regarding resources, marketing strategies, and enrollment targets.',
    icon: HiOutlineDatabase,
    gradientClass: 'bg-gradient-to-r from-gray-600 to-gray-800',
  },
  {
    title: 'Streamlined Admission Process',
    description: 'Automates several aspects of the admission inquiry process, reducing manual work and allowing staff to focus on critical tasks.',
    icon: HiOutlineUserAdd,
    gradientClass: 'bg-gradient-to-r from-pink-500 to-rose-700',
  },
];

const AdmissionFeatureCardSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {admissionFeatures.map((feature, index) => (
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

export default AdmissionFeatureCardSection;
