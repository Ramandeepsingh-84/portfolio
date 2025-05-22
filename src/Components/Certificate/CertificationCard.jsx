// const CertificationCard = ({ name, date, description }) => {
//   return (
//     <div className="bg-white text-black p-6 rounded-lg shadow-lg min-h-[220px] flex flex-col justify-start">
//       <h3 className="text-xl font-semibold mb-2">{name}</h3>
//       <p className="text-sm text-gray-700 mb-4">{date}</p>
//       <p className="text-sm text-gray-600 text-left">{description}</p>
//     </div>
//   );
// };

// export default CertificationCard;


import React from "react";

const CertificationCard = ({ name, date, description, image, url }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-6 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2 text-blue-400">{name}</h3>
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      <button
        className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
        onClick={() => window.certificateModal.showModal(name, image, url)}
      >
        View Certificate
      </button>
    </div>
  );
};

export default CertificationCard;
