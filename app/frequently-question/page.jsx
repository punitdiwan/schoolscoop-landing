"use client";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Header/NavBar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlobalLoader from "@/components/GlobalLoader"; // Assuming this is a spinner or similar UI

export default function FrequentlyQuestion() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true); // loading state

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch(
          "https://cms.maitretech.com/edusparsh/items/frequetlyquestion?fields=*.*"
        );
        const json = await response.json();
        setFaqs(json.data || []);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false); // hide loader
      }
    };

    fetchFAQs();
  }, []);

  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        {/* Show loader while fetching */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <GlobalLoader />
          </div>
        ) : (
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li
                key={faq.id}
                className="bg-white p-4 rounded shadow transition-all duration-300"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-medium">{faq.question}</h2>
                  <span className="text-3xl font-bold text-blue-600">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 text-gray-700 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer />
    </>
  );
}
