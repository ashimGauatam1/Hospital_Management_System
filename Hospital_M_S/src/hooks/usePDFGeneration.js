import jsPDF from 'jspdf';
import 'jspdf-autotable';

const usePDFGeneration = () => {
  const generatePDF = (labRequest,result) => {
    console.log(result);
    const doc = new jsPDF();

    const headerHeight = 60;
    doc.setFillColor(30, 58, 138);
    doc.rect(0, 0, doc.internal.pageSize.width, headerHeight, 'F'); 

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('City Hospital', doc.internal.pageSize.width / 2, 20, { align: 'center' });

     doc.setFontSize(10);
    doc.text('Location: Pokhara, Bagaar', doc.internal.pageSize.width / 2, 30, { align: 'center' });
    doc.text('Phone: 9864452384 | Email: ashimgautam01@gmail.com', doc.internal.pageSize.width / 2, 35, { align: 'center' });

    doc.setFontSize(22);
    doc.text('LAB REPORT', doc.internal.pageSize.width / 2, headerHeight - 10, { align: 'center' });

    doc.setDrawColor(255, 255, 255);
    doc.line(10, headerHeight, doc.internal.pageSize.width - 10, headerHeight);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); 
    const margin = 20;
    doc.text(`Appointment ID: ${labRequest.appointment.appointmentId}`, margin, headerHeight + 10);
    doc.text(`Name: ${labRequest.user.name}`, margin, headerHeight + 20);
    doc.text(`email: ${labRequest.user.email}`, margin, headerHeight + 30);
    doc.text(`Sample Type: ${labRequest.sampleType}`, margin, headerHeight + 40);
    doc.text(`Charge: $${labRequest.charge}`, margin, headerHeight + 50);
    doc.text('Result:', margin, headerHeight + 60);


doc.setFont('helvetica', 'normal');  
const resultText = labRequest.result || 'completed';
if (resultText === 'completed') {
    doc.setTextColor(0, 200, 0);  
}
doc.text(resultText, margin + doc.getTextWidth('Result: ') + 5, headerHeight + 60);
    doc.autoTable({
      startY: headerHeight + 65,
      head: [['Investigation', 'Result', 'Reference Value', 'Unit']],
      body: [
        ['Sodium', `${result.sodium}`, '135 - 145', 'mEq/L'],
        ['Potassium', `${result.potassium}`, '3.5 - 5.0', 'mEq/L'],
        ['Calcium', `${result.calcium}`, '8.5 - 10.2', 'mg/dL'],
        ['AST', `${result.AST}`, '10 - 40', 'U/L'],
        ['ALT', `${result.ALT}`, '7 - 56', 'U/L'],
        ['Alkaline Phosphatase', `${result.alkalinePhosphatase}`, '44 - 147', 'U/L'],
        ['Bilirubin Direct', `${result.bilirubinDirect}`, '0.1 - 0.3', 'mg/dL'],
        ['Bilirubin Indirect', `${result.bilirubinIndirect}`, '0.2 - 0.8', 'mg/dL']
      ],
      theme: 'striped',
      headStyles: { fillColor: [0, 76, 153] }, 
      styles: { cellPadding: 3, fontSize: 10 },
      columnStyles: { 0: { halign: 'left' }, 1: { halign: 'center' }, 2: { halign: 'center' }, 3: { halign: 'center' } }
    });
 
    const footerY = doc.internal.pageSize.height - 50;
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text('______________', doc.internal.pageSize.width-80, footerY);
    doc.text('Lab Assistant', doc.internal.pageSize.width -80, footerY + 5, { align: 'left' });

    doc.text('R. Sharma', doc.internal.pageSize.width - 80, footerY+15);
    doc.text('Qualification: MLT', doc.internal.pageSize.width - 80, footerY + 20);
    doc.text('Email: r.sharma@cityhospital.com', doc.internal.pageSize.width - 80, footerY + 25);
    doc.text('Phone: 9865231450', doc.internal.pageSize.width - 80, footerY + 30);

    // Footer Text (Professional closing note)
    const footerTextY = doc.internal.pageSize.height -5;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); 
    doc.text('This is a digitally generated report. No signature required.', doc.internal.pageSize.width / 2, footerTextY, { align: 'center' });

    // Save the PDF
    doc.save(`Lab_Report_${labRequest.appointment.appointmentId}.pdf`);
  };
  return generatePDF;
};

export default usePDFGeneration;
