// src/Components/Certificate/CertificateModal.jsx
import React, { useState, useImperativeHandle, forwardRef } from "react";

const CertificateModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({ name: "", image: "", url: "" });

  useImperativeHandle(ref, () => ({
    showModal(name, image, url) {
      setData({ name, image, url });
      setIsOpen(true);
    },
    closeModal() {
      setIsOpen(false);
    }
  }));

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg relative max-w-[90%] max-h-[90%] overflow-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-2xl text-black"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4 text-black">{data.name}</h2>
        <img src={data.image} alt={data.name} className="max-w-full max-h-[70vh] mb-4" />
        {/* <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Open in new tab
        </a> */}
      </div>
    </div>
  );
});

export default CertificateModal;
