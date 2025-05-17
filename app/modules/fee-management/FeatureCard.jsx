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

export const features = [
  {
    title: 'Automated Fee Collection',
    description: 'Streamlines and speeds up the entire fee payment process with minimal manual effort.',
    icon: HiOutlineCurrencyDollar,
    gradientClass: 'bg-gradient-to-r from-blue-500 to-blue-700',
  },
  {
    title: 'Error-Free Calculations',
    description: 'Reduces manual errors in fee amounts, discounts, fines, and adjustments.',
    icon: HiOutlineCalculator,
    gradientClass: 'bg-gradient-to-r from-indigo-500 to-purple-700',
  },
  {
    title: 'Flexible Payment Options',
    description: 'Supports online payments, part payments, and customizable installment plans.',
    icon: HiOutlineCreditCard,
    gradientClass: 'bg-gradient-to-r from-green-500 to-teal-700',
  },
  {
    title: 'Instant Receipts & Records',
    description: 'Automatically generates receipts and stores full payment history.',
    icon: HiOutlineReceiptTax,
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-orange-700',
  },
  {
    title: 'Real-Time Reports',
    description: 'Provides insights into paid, pending, overdue, and future payments.',
    icon: HiOutlineChartBar,
    gradientClass: 'bg-gradient-to-r from-pink-500 to-rose-700',
  },
  {
    title: 'Timely Notifications',
    description: 'Sends SMS and email reminders for upcoming or overdue payments.',
    icon: HiOutlineMail,
    gradientClass: 'bg-gradient-to-r from-red-500 to-rose-700',
  },
  {
    title: 'Customizable Fee Structures',
    description: 'Easily configure tuition, transport, hostel, and other fee categories.',
    icon: HiOutlineAdjustments,
    gradientClass: 'bg-gradient-to-r from-teal-500 to-cyan-700',
  },
  {
    title: 'Improved Transparency',
    description: 'Gives parents easy access to all past and pending payment records.',
    icon: HiOutlineClipboardList,
    gradientClass: 'bg-gradient-to-r from-purple-500 to-indigo-700',
  },
  {
    title: 'Secure Transactions',
    description: 'Ensures safe and encrypted fee payments with access control.',
    icon: HiOutlineShieldCheck,
    gradientClass: 'bg-gradient-to-r from-lime-500 to-emerald-700',
  },
  {
    title: 'Reduces Administrative Burden',
    description: 'Automates fee management to save time and reduce staff workload.',
    icon: HiOutlineUserGroup,
    gradientClass: 'bg-gradient-to-r from-orange-500 to-yellow-600',
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
