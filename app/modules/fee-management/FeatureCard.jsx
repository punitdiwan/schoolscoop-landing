// data/features.js

import {
  HiOutlineCurrencyDollar,
  HiOutlineCalculator,
  HiOutlineCreditCard,
  HiOutlineReceiptTax,
  HiOutlineChartBar,
  HiOutlineMail,
  HiOutlineAdjustments,
  HiOutlineClipboardList,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import FeatureCard from '../../../components/Modules/FeatureCard';

// Define a default gradient class
const defaultGradientClass = 'bg-gradient-to-r from-indigo-900 to-blue-800'; // Customize as needed

export const features = [
  {
    title: 'Automated Fee Collection',
    description: 'Streamlines and speeds up the entire fee payment process with minimal manual effort.',
    icon: HiOutlineCurrencyDollar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Error-Free Calculations',
    description: 'Reduces manual errors in fee amounts, discounts, fines, and adjustments.',
    icon: HiOutlineCalculator,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Flexible Payment Options',
    description: 'Supports online payments, part payments, and customizable installment plans.',
    icon: HiOutlineCreditCard,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Instant Receipts & Records',
    description: 'Automatically generates receipts and stores full payment history.',
    icon: HiOutlineReceiptTax,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Real-Time Reports',
    description: 'Provides insights into paid, pending, overdue, and future payments.',
    icon: HiOutlineChartBar,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Timely Notifications',
    description: 'Sends SMS and email reminders for upcoming or overdue payments.',
    icon: HiOutlineMail,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Customizable Fee Structures',
    description: 'Easily configure tuition, transport, hostel, and other fee categories.',
    icon: HiOutlineAdjustments,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Improved Transparency',
    description: 'Gives parents easy access to all past and pending payment records.',
    icon: HiOutlineClipboardList,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Secure Transactions',
    description: 'Ensures safe and encrypted fee payments with access control.',
    icon: HiOutlineShieldCheck,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
  {
    title: 'Reduces Administrative Burden',
    description: 'Automates fee management to save time and reduce staff workload.',
    icon: HiOutlineUserGroup,
    gradientClass: defaultGradientClass, // Use default gradient class
  },
];

const FeatureCardsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {features.map((feature, index) => (
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

export default FeatureCardsSection;
