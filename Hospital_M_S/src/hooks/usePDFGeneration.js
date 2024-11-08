
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const usePDFGeneration = () => {
  const generatePDF = (labRequest) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Lab Report', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Appointment ID: ${labRequest.appointmentId}`, 20, 40);
    doc.text(`Sample Type: ${labRequest.sampleType}`, 20, 50);
    doc.text(`Charge: $${labRequest.charge}`, 20, 60);
    doc.text(`Additional Details: ${labRequest.additionalDetails}`, 20, 70);
    doc.text(`Result: ${labRequest.result || 'Pending'}`, 20, 80);

    doc.autoTable({
      startY: 90,
      head: [['Investigation', 'Result', 'Reference Value', 'Unit']],
      body: [
        ['Hemoglobin', '12.5', '13.0 - 17.0', 'g/dL'],
        ['RBC Count', '5.2', '4.5 - 5.5', 'mill/cumm'],
        ['Packed Cell Volume', '57.5', '40 - 50', '%'],
        ['Mean Corpuscular Volume', '87.75', '83 - 101', 'fL'],
        ['Platelet Count', '150000', '150000 - 410000', 'cumm'],
      ],
    });

    doc.text('****End of Report****', 105, doc.internal.pageSize.height - 20, { align: 'center' });
    doc.save(`Lab_Report_${labRequest.appointmentId}.pdf`);
  };

  return generatePDF;
};

export default usePDFGeneration;
