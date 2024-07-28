// src/mockMedicines.js

const mockMedicines = [
    {
      id: 1,
      name: "Aspirin",
      image: "https://via.placeholder.com/200x200.png?text=Aspirin",
      uses: "Pain relief, fever reduction, anti-inflammatory",
      sideEffects: "Stomach irritation, bleeding risk",
      price: "$5.99"
    },
    {
      id: 2,
      name: "Ibuprofen",
      image: "https://via.placeholder.com/200x200.png?text=Ibuprofen",
      uses: "Pain relief, fever reduction, anti-inflammatory",
      sideEffects: "Stomach upset, risk of heart attack and stroke",
      price: "$7.99"
    },
    {
      id: 3,
      name: "Amoxicillin",
      image: "https://via.placeholder.com/200x200.png?text=Amoxicillin",
      uses: "Bacterial infections treatment",
      sideEffects: "Diarrhea, nausea, rash",
      price: "$12.99"
    },
    {
      id: 4,
      name: "Lisinopril",
      image: "https://via.placeholder.com/200x200.png?text=Lisinopril",
      uses: "High blood pressure treatment",
      sideEffects: "Dizziness, cough, headache",
      price: "$15.99"
    },
    {
      id: 5,
      name: "Metformin",
      image: "https://via.placeholder.com/200x200.png?text=Metformin",
      uses: "Type 2 diabetes management",
      sideEffects: "Nausea, diarrhea, stomach discomfort",
      price: "$10.99"
    }
  ];
  
  export const fetchMockMedicines = async (searchTerm) => {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return mockMedicines.filter(medicine => 
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };