'use client';
import Header from '@/components/Header/Header'
import React,{useState,useEffect} from 'react';
const HomePage = () => {
 const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check sessionStorage to see if popup was already shown in this session
    const hasShownPopup = sessionStorage.getItem('hasShownPopup');

    if (!hasShownPopup) {
      setShowPopup(true); // Show popup
      sessionStorage.setItem('hasShownPopup', 'true'); // Mark as shown
    }
  }, []);

  return (
    <div className='w-full'>

        <Header/>
<div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden w-[90%] max-w-sm sm:max-w-md md:max-w-lg">
            
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black text-xl"
            >
              ❌
            </button>

            {/* Image */}
            <img
              src="popup.png"
              alt="Popup"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}
    </div>

    </div>
  )
}

export default HomePage