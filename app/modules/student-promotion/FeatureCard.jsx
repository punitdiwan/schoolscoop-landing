import {
  HiOutlineArrowCircleUp,
  HiOutlineCheckCircle,
  HiOutlineAdjustments,
  HiOutlineRefresh,
  HiOutlineDocumentReport,
  HiOutlineEye,
  HiOutlineClipboardList,
  HiOutlineClipboardCheck,
  HiOutlineChartBar,
} from 'react-icons/hi';
import FeatureCard from '../../../components/Modules/FeatureCard';

// Define a default gradient class
const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800'; // Customize as needed

export const promotionFeatures = [
  {
    title: 'Streamlined Promotion Process',
    description: 'Automates the process of promoting students based on their academic performance, saving time and effort for administrators.',
    icon: HiOutlineArrowCircleUp,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Accuracy & Consistency',
    description: 'Ensures promotions are based on predefined criteria (e.g., grades, attendance), reducing errors and ensuring fairness.',
    icon: HiOutlineCheckCircle,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Customizable Promotion Rules',
    description: 'Schools can set specific promotion conditions, such as passing certain subjects or achieving a minimum attendance percentage.',
    icon: HiOutlineAdjustments,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Real-Time Updates',
    description: 'Provides instant updates on student promotion status, improving communication with students and parents.',
    icon: HiOutlineRefresh,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Efficient Reporting',
    description: 'Generates promotion reports and certificates automatically, reducing paperwork and administrative workload.',
    icon: HiOutlineDocumentReport,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Improved Transparency',
    description: 'Offers clear documentation and justification for promotion decisions, ensuring transparency in the process.',
    icon: HiOutlineEye,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Easy Record Management',
    description: 'Maintains accurate and organized records of student progress for future reference.',
    icon: HiOutlineClipboardList,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Reduced Administrative Burden',
    description: 'Minimizes manual tasks like calculating results and preparing promotion lists, freeing up time for staff.',
    icon: HiOutlineClipboardCheck,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Better Decision-Making',
    description: 'Provides data-driven insights into student performance, supporting more informed academic planning.',
    icon: HiOutlineChartBar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
];

const PromotionFeatureCardsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {promotionFeatures.map((feature, index) => (
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

export default PromotionFeatureCardsSection;
