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

export const promotionFeatures = [
  {
    title: 'Streamlined Promotion Process',
    description: 'Automates the process of promoting students based on their academic performance, saving time and effort for administrators.',
    icon: HiOutlineArrowCircleUp,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-indigo-700',
  },
  {
    title: 'Accuracy & Consistency',
    description: 'Ensures promotions are based on predefined criteria (e.g., grades, attendance), reducing errors and ensuring fairness.',
    icon: HiOutlineCheckCircle,
    gradientClass: 'bg-gradient-to-r from-green-500 to-emerald-700',
  },
  {
    title: 'Customizable Promotion Rules',
    description: 'Schools can set specific promotion conditions, such as passing certain subjects or achieving a minimum attendance percentage.',
    icon: HiOutlineAdjustments,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-pink-700',
  },
  {
    title: 'Real-Time Updates',
    description: 'Provides instant updates on student promotion status, improving communication with students and parents.',
    icon: HiOutlineRefresh,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-orange-700',
  },
  {
    title: 'Efficient Reporting',
    description: 'Generates promotion reports and certificates automatically, reducing paperwork and administrative workload.',
    icon: HiOutlineDocumentReport,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Improved Transparency',
    description: 'Offers clear documentation and justification for promotion decisions, ensuring transparency in the process.',
    icon: HiOutlineEye,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
  {
    title: 'Easy Record Management',
    description: 'Maintains accurate and organized records of student progress for future reference.',
    icon: HiOutlineClipboardList,
    gradientClass: 'bg-gradient-to-r from-gray-600 to-gray-800',
  },
  {
    title: 'Reduced Administrative Burden',
    description: 'Minimizes manual tasks like calculating results and preparing promotion lists, freeing up time for staff.',
    icon: HiOutlineClipboardCheck,
    gradientClass: 'bg-gradient-to-r from-indigo-500 to-blue-700',
  },
  {
    title: 'Better Decision-Making',
    description: 'Provides data-driven insights into student performance, supporting more informed academic planning.',
    icon: HiOutlineChartBar,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-green-700',
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
