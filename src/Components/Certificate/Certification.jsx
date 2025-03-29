import React from "react";
import CertificationList from "./CertificationList";

const Certifications = () => {
  return (
    <div id="Certifications" className="p-10 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">My Certifications</h2>
      <CertificationList />
    </div>
  );
};

export default Certifications;
