import React, { useState } from "react";
import { Aside } from "../../Components/aside";
import useLabReports from "../../hooks/useLabReports";
import LabReportForm from "../../Components/LabForm";
import axios from "axios";
import usePDFGeneration from "../../hooks/usePDFGeneration";

const LabReportsPage = () => {
  const { labReports, isSubmitting, submitLabResult } = useLabReports();
  const [pdfUrl, setpdfUrl] = useState();
  const [result, setResult] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentReport, setCurrentReport] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResult((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitResult = async () => {
    const blob = usePDFGeneration()(currentReport, result);
    const url = URL.createObjectURL(blob);
    console.log(url);
    setpdfUrl(url);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/lab/submit",
        {
          user: currentReport.user,
          appointment: currentReport.appointment,
          sampleType: currentReport.sampleType,
          data: result,
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setShowModal(false);
    }
  };
  const print = () => {
    const printWindow = window.open(pdfUrl, "_blank");
    printWindow.print();
  };
  return (
    <>
      <div className="flex min-h-screen">
        <Aside />

        <div className="flex-1 p-8 mx-60">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4">
              All Lab Reports
            </h2>
          </div>

          {labReports.length > 0 ? (
            <ul className="space-y-6">
              {labReports.map((labReport, index) =>
                labReport.lab.map((report, index2) => (
                  <li
                    key={index2}
                    className="p-4 md:p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
                      <div className="mb-4 md:mb-0">
                        <h3 className="font-semibold text-lg text-teal-600">
                          Appointment ID: {report.appointment.appointmentId}
                        </h3>
                        <h3 className="font-semibold text-lg">
                          Patient Name: {report.user.name}
                        </h3>
                        <h3 className="text-sm text-gray-500">{report.date}</h3>
                        <p className="font-semibold">
                          Sample Type: {report.sampleType}
                        </p>
                        <p className="flex items-center">
                          Charge: Rs.{" "}
                          <span className="font-bold text-red-500 ml-1">
                            {report.charge}
                          </span>
                        </p>
                        <p>
  Status:{" "}
  <span
    className={` p-0.5 ml-2 rounded-md ${report.status === "completed" ? "bg-green-500" : "bg-red-400"}`}
  >{report.status}</span>
  
</p>

                      </div>
                      {report.status == "pending" ? (
                        <button
                          onClick={() => {
                            setCurrentReport(report);
                            setShowModal(true);
                          }}
                          className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-200"
                        >
                          Submit Result
                        </button>
                      ) : (
                        <button
                          onClick={print}
                          className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-200"
                        >
                          Print Result
                        </button>
                      )}
                    </div>
                  </li>
                ))
              )}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No lab reports found.</p>
          )}
        </div>
      </div>

      {/* Modal for submitting report results */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 p-4 sm:p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full overflow-auto max-h-[90vh]">
            <h3 className="text-xl font-semibold mb-4">
              Submit Lab Report Result
            </h3>

            <LabReportForm report={currentReport} handleChange={handleChange} />

            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitResult}
                disabled={isSubmitting}
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LabReportsPage;
