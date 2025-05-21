'use client';
import { useState } from 'react';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import Image from 'next/image';
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

const BrochureDownload = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleDownload = () => {
    if (!name.trim() || !phone.trim()) {
      setError('Please fill in both Name and Phone Number.');
      return;
    }

    setError('');
    setSuccess(true);

    const pdfUrl = '/brochure/edusparshbrochure.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${name.replace(/\s+/g, '_')}_eduspersh_brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <div>
    <NavBar></NavBar>
    </div>

    <div className="bg-gradient-to-br from-indigo-100 via-indigo-50 to-white py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/70 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Section */}
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

        {/* Right Section */}
        <div className="md:w-1/2 p-8 space-y-6 flex flex-col justify-center">
          <div>
            <h3 className="text-3xl font-extrabold text-gray-800 leading-tight">
              Get the <span className="text-indigo-600">EduSparsh Brochure</span>
            </h3>
            <p className="text-gray-600 mt-2">Fill in your details to instantly download our brochure and explore what we offer.</p>
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
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">Download should begin shortly...</p>}
          </div>

          <button
            onClick={handleDownload}
            className="transition-all duration-300 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <PiDownloadSimpleBold  className='className="h-10 w-20"'/>
           
            Download Brochure
          </button>
        </div>
      </div>
    </div>
    <div className='pb-10'>
<h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center leading-snug max-w-4xl mx-auto text-gray-800">
  "At <span className='text-indigo-600 font-bold'>EduSparsh</span>, <span className='text-indigo-500'>education</span> is more than teaching — it's about igniting minds, nurturing growth, and shaping the future."
</h3>
</div>

    <div>
    <Footer></Footer>
    </div>
        </>
  );
};

export default BrochureDownload;
