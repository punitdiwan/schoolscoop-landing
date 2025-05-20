'use client';

import { useState, useEffect } from 'react';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import Image from 'next/image';
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

const BrochureDownload = () => {
  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // PDF download URL
  const [pdfUrl, setPdfUrl] = useState('');

  // Fetch brochure URL on mount
  useEffect(() => {
    const fetchBrochure = async () => {
      try {
        const response = await fetch('https://cms.maitretech.com/edusparsh/items/edus_brochure?fields=*.*');
        const data = await response.json();
        const fullUrl = data?.data?.[0]?.uploadbrochure?.data?.full_url || '';
        if (fullUrl) {
          // Replace http with https
          const secureUrl = fullUrl.replace(/^http:/, 'https:');
          setPdfUrl(secureUrl);
        }
      } catch (err) {
        console.error('Failed to fetch brochure:', err);
      }
    };

    fetchBrochure();
  }, []);

  // Validate and submit form, then download
  const handleDownload = async () => {
    // Input validation
    if (!name.trim() || !phone.trim()) {
      setError('Please fill in both Name and Phone Number.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Phone number must be exactly 10 digits.');
      return;
    }

    if (!pdfUrl) {
      setError('Brochure not available for download at the moment.');
      return;
    }

    setError('');
    setSuccess(true);

    // Submit form data
    try {
      await fetch('https://cms.maitretech.com/edusparsh/items/brochureform?fields=*.*', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, number: phone }),
      });

      // Open brochure in new tab
      window.open(pdfUrl, '_blank');

      // Clear form after success
      setName('');
      setPhone('');
    } catch (err) {
      console.error('Failed to submit form:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <NavBar />

      <div className="bg-gradient-to-br from-indigo-100 via-indigo-50 to-white py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/70 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Image */}
          <div className="md:w-1/2 relative min-h-[350px]">
            <Image
              src="/brochure/brochure.jpg"
              alt="Vidyalaya Brochure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl font-bold drop-shadow">Download EduSparsh</h2>
              <p className="text-sm text-gray-200">School Software Brochure</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:w-1/2 p-8 space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-800 leading-tight">
                Get the <span className="text-indigo-600">EduSparsh Brochure</span>
              </h3>
              <p className="text-gray-600 mt-2">
                Fill in your details to instantly download our brochure and explore what we offer.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone Number *"
                value={phone}
                onChange={(e) => {
                  // Only allow numbers
                  const val = e.target.value.replace(/\D/g, '');
                  setPhone(val);
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                maxLength={10}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-600 text-sm">Download should begin shortly...</p>}
            </div>

            <button
              onClick={handleDownload}
              className="transition-all duration-300 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              <PiDownloadSimpleBold className="h-6 w-6" />
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="pb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center leading-snug max-w-4xl mx-auto text-gray-800">
          "At <span className='text-indigo-600 font-bold'>EduSparsh</span>, <span className='text-indigo-500'>education</span> is more than teaching — it's about igniting minds, nurturing growth, and shaping the future."
        </h3>
      </div>

      <Footer />
    </>
  );
};

export default BrochureDownload;
