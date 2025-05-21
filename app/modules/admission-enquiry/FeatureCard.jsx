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

// Define the default gradient class
const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800'; // Adjust this gradient as needed

const admissionFeatures = [
  {
    title: 'Organized Inquiry Management',
    description: 'All incoming inquiries are stored in one place, allowing the school to track, manage, and respond efficiently.',
    icon: HiOutlineClipboardList,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Improved Follow-up Process',
    description: 'Automated reminders and follow-up tracking ensure no inquiry is overlooked, leading to timely responses.',
    icon: HiOutlineClock,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Enhanced Communication',
    description: 'Provides seamless communication with automated email responses and real-time updates, keeping the enquirer informed.',
    icon: HiOutlineMail,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Increased Conversion Rates',
    description: 'Streamlines follow-ups and nurturing of leads, converting more inquiries into actual admissions.',
    icon: HiOutlineTrendingUp,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Time Efficiency',
    description: 'Automates routine tasks such as acknowledgment emails, follow-up reminders, and generating reports, saving time.',
    icon: HiOutlineClock,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Real-Time Data and Reporting',
    description: 'Generates reports on inquiry sources, demographics, and conversion rates to help analyze and improve the admissions process.',
    icon: HiOutlineChartBar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Better Lead Tracking',
    description: 'Tracks the source of each inquiry, allowing schools to evaluate marketing campaigns and optimize future efforts.',
    icon: HiOutlineTag,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Personalized Service',
    description: 'Provides tailored experiences for each inquiry, increasing the chances of successful enrollment.',
    icon: HiOutlineUserGroup,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Improved Decision Making',
    description: 'Helps administrators make data-driven decisions regarding resources, marketing strategies, and enrollment targets.',
    icon: HiOutlineDatabase,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Streamlined Admission Process',
    description: 'Automates several aspects of the admission inquiry process, reducing manual work and allowing staff to focus on critical tasks.',
    icon: HiOutlineUserAdd,
    gradientClass: defaultGradientClass, // Use default gradient class
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
