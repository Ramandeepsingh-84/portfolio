const CertificationCard = ({ name, date, description }) => {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg min-h-[220px] flex flex-col justify-start">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-700 mb-4">{date}</p>
      <p className="text-sm text-gray-600 text-left">{description}</p>
    </div>
  );
};

export default CertificationCard;
