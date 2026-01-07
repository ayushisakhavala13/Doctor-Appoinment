// PDF GENERATION (SAME LOGIC)
function downloadAppointmentPDF(id){
  const { jsPDF } = window.jspdf;
  const appointment = allRecords.find(a => a.id===id);
  const pdf = new jsPDF();

  pdf.setFontSize(18);
  pdf.text('Appointment Details',20,20);
  pdf.setFontSize(12);
  pdf.text('Patient: '+appointment.user.name,20,40);
  pdf.text('Doctor: '+appointment.doctor.name,20,50);
  pdf.text('Date: '+appointment.date,20,60);
  pdf.text('Time: '+appointment.time,20,70);

  pdf.save('appointment_'+id+'.pdf');
}
