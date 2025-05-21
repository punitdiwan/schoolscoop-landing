import ModuleContent from '../../../components/Modules/ModuleContent';

const FeeContent = () => {
  return (
    <>
      <ModuleContent
         imageSrc="/module-bg.webp" 
        imagePosition="left"
        backgroundColor="#ffece0"
        heading="Manage Fees System"
        subheading="What is a Manage Fees System?"
        paragraphs={[
          "A Manage Fees System is a digital tool designed to automate and simplify the fee collection and management process in educational institutions.",
          "It helps schools, colleges, and coaching centers track student payments, generate fee receipts, set due dates, send reminders, and manage different fee structures efficiently.",
          "The system ensures accurate records, reduces manual errors, improves transparency, and allows parents to make online payments easily.",
          "It also provides real-time reports for better financial planning and control."
        ]}
      />

      <ModuleContent
        imageSrc="/module-bg2.png" 
        imagePosition="right"
        backgroundColor="#fff9ec"
        subheading="Why Do We Need a Manage Fees Module in School Software?"
        paragraphs={[
          "The Manage Fees module in school software is essential for automating and streamlining the entire fee collection and management process.",
          "It helps schools maintain accurate records of student payments, generate invoices, send reminders for due or pending fees, and track various fee structures like tuition, transport, or exam fees.",
          "This module reduces the risk of manual errors, enhances transparency, and saves time for both administrative staff and parents.",
          "It also allows for easy generation of financial reports, supports multiple payment methods, and ensures timely collection of fees.",
          "By integrating this module into school software, institutions can improve financial management, ensure accountability, and offer a hassle-free experience to parents."
        ]}
      />
    </>
  );
};

export default FeeContent;
