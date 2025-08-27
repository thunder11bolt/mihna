import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function captureElementAsPdf(element: HTMLElement, fileName = 'cv.pdf') {
  if (!element) throw new Error('Element not found');
  const scale = 2;
  const canvas = await html2canvas(element, {
    scale,
    useCORS: true,
    allowTaint: true,
    logging: false,
    backgroundColor: '#ffffff',
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({
    unit: 'px',
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
  pdf.save(fileName);
}
