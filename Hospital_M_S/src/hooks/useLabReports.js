import axios from 'axios';
import { useState, useEffect } from 'react';

const useLabReports = () => {
  const [labReports, setLabReports] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchLabReports();
  }, []);

  const fetchLabReports = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/lab/getreports');
    
      setLabReports(response.data.data); 
    } catch (error) {
      console.error("Error fetching lab reports:", error);
    }
  };

  const submitLabResult = async (appointmentId, result) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://your-backend-api.com/lab-reports/${appointmentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ result }),
      });

      if (response.ok) {
        const updatedReports = labReports.map(report => {
          if (report.appointment._id === appointmentId) {
            return { ...report, status: true, result };  
          }
          return report;
        });
        setLabReports(updatedReports);
        return true;
      } else {
        console.error('Failed to submit the result');
        return false;
      }
    } catch (error) {
      console.error('Error submitting lab result:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    labReports,
    isSubmitting,
    submitLabResult,
  };
};

export default useLabReports;
