import React from 'react';

const defaultBgFront = 'linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)';
const defaultBgBack = 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)';

export default function FlipCard({
  image,
  title,
  features = ['Feature 1', 'Feature 2', 'Feature 3'],
  bgFront = defaultBgFront,
  bgBack = defaultBgBack,
}) {
  return (
    <div className="group w-[300px] h-[254px] [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-md shadow-lg">

        {/* Front Side */}
        <div
          className="bg-slate-800 absolute inset-0 rounded-md overflow-hidden [backface-visibility:hidden] z-10 flex items-center justify-center"
          style={{ background: bgFront }}
        >
          <div className="text-center">
            <div className="flex justify-center">
              {image && (
                <img
                  width={200}
                  height={200}
                  src={image}
                  alt={title}
                  className="object-cover rounded-md"
                />
              )}
            </div>
            <h3 className="mt-3 text-[#fdfdfd] font-bold">{title}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-white rounded-md overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ background: bgBack }}
        >
          <div className="w-[90%] p-4">
            <h3 className="text-lg font-semibold mb-3 text-center">Features</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
