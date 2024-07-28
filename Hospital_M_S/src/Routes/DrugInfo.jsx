// src/MedicineSearch.js

import React, { useState, useEffect } from 'react';
import { fetchMockMedicines } from '../assets/objects/Medicine';

const MedicineSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  useEffect(() => {
    const fetchMedicines = async () => {
      if (searchTerm.length < 2) {
        setSearchResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const medicines = await fetchMockMedicines(searchTerm);
        setSearchResults(medicines);
      } catch (err) {
        setError('An error occurred while fetching data');
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(() => {
      fetchMedicines();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine);
  };

  return (
    <div className="container mx-auto mt-10 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Medicine Search</h2>
          <input
            type="text"
            placeholder="Search for medicines..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {loading && <p className="mt-4 text-gray-600">Loading...</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}
          {searchTerm.length >= 2 && !loading && !error && (
            <ul className="mt-4 space-y-2">
              {searchResults.length > 0 ? (
                searchResults.map((medicine) => (
                  <li
                    key={medicine.id}
                    onClick={() => handleMedicineClick(medicine)}
                    className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                  >
                    {medicine.name}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No results found</li>
              )}
            </ul>
          )}
        </div>
        
        {selectedMedicine && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedMedicine.name}</h2>
            <div className="grid grid-cols-1 gap-4">
              <img 
                src={selectedMedicine.image} 
                alt={selectedMedicine.name}
                className="w-full h-auto rounded-md mb-4"
              />
              <div>
                <p><strong>Uses:</strong> {selectedMedicine.uses}</p>
                <p><strong>Side Effects:</strong> {selectedMedicine.sideEffects}</p>
                <p><strong>Price:</strong> {selectedMedicine.price}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineSearch;