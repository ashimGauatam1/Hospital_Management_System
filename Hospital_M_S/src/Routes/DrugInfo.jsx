import React, { useState, useEffect } from "react";
import axios from "axios";

const MedicineSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  useEffect(() => {
    const fetchMedicines = async () => {
      if (searchTerm.length > 0) {
        try {
          const response = await axios.get(
            `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${searchTerm}*&limit=5`
          );
          setMedicines(response.data.results || []);
          setShowRecommendations(true);
        } catch (error) {
          console.error("Error fetching data:", error);
          setMedicines([]);
          setShowRecommendations(false);
        }
      } else {
        setMedicines([]);
        setShowRecommendations(false);
      }
    };

    const debounce = setTimeout(() => {
      fetchMedicines();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine);
    setShowRecommendations(false);
  };

  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?t=st=1727697505~exp=1727701105~hmac=a0a64d29722d1aba204170c1f89395e6f2df3524b7a05920dcbc570a43246dd5&w=996')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="py-10 bg-white bg-opacity-60 h-full">
        <div><p><p>.</p></p></div>
        <div className="p-6 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center text-cyan-700">Medicine Search</h1>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a medicine..."
            className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showRecommendations && medicines.length > 0 && (
              <div className="bg-white shadow-gray-400 shadow-lg rounded-lg p-6">
                <h2 className="text-xl mb-4 text-center text-cyan-700 font-bold">
                  Recommendations
                </h2>
                <ul className="divide-y divide-blue-300">
                  {medicines.map((medicine, index) => (
                    <li
                      key={index}
                      onClick={() => handleMedicineClick(medicine)}
                      className="cursor-pointer py-3 hover:bg-cyan-50 transition-colors duration-200"
                    >
                      {medicine.openfda?.brand_name[0] || "No name available"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {selectedMedicine && (
            <div className="bg-white shadow-lg shadow-gray-300 rounded-lg p-6 mt-5">
              <h2 className="text-xl font-bold mb-4 text-center text-cyan-900">
                Medicine Details
              </h2>
              <div className="space-y-2">
                <p>
                  <strong>Name:</strong>{" "}
                  {selectedMedicine.openfda?.brand_name[0] || "No name available"}
                </p>
                <p>
                  <strong>Manufacturer:</strong>{" "}
                  {selectedMedicine.openfda?.manufacturer_name?.[0] ||
                    "No manufacturer information"}
                </p>
                <p>
                  <strong>Purpose:</strong>{" "}
                  {selectedMedicine.indications_and_usage?.[0] || "No purpose information"}
                </p>
                <p>
                  <strong>Side Effects:</strong>{" "}
                  {selectedMedicine.warnings_and_cautions?.[0] ||
                    "No side effects information"}
                </p>
                <p>
                  <strong>Active Ingredients:</strong>{" "}
                  {selectedMedicine.active_ingredients?.map(
                    (ingredient, index) => (
                      <span key={index}>
                        {ingredient.name || "No name"}
                        {index < selectedMedicine.active_ingredients.length - 1
                          ? ", "
                          : ""}
                      </span>
                    )
                  ) || "No active ingredients information"}
                </p>
                <p>
                  <strong>Drug Class:</strong>{" "}
                  {selectedMedicine.openfda?.substance_name?.join(", ") ||
                    "No drug class information"}
                </p>
                <div>
                  <strong>Indications and Usage:</strong>
                  <p>
                    {selectedMedicine.indications_and_usage?.[0]?.length > 100
                      ? `${selectedMedicine.indications_and_usage[0].slice(0, 100)}... `
                      : selectedMedicine.indications_and_usage[0] || "No information available"}
                    {selectedMedicine.indications_and_usage?.[0]?.length > 100 && (
                      <button
                        onClick={() => {
                          alert(selectedMedicine.indications_and_usage[0]);
                        }}
                        className="text-blue-500 hover:underline"
                      >
                        Read more
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicineSearch;
