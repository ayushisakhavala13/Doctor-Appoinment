// BOOK APPOINTMENT (UI SAME AS ORIGINAL)
function renderBooking(container, config, colors) {
  const baseSize = config.font_size || 16;
  const customFont = config.font_family || 'Inter';

  container.innerHTML = `
    <button class="btn-hover" onclick="backToProfile()">← Back</button>

    <div class="slide-up" style="background:${colors.surface};border:2px solid ${colors.border};
      padding:3rem;border-radius:1.5rem;max-width:700px;margin-top:2rem;">

      <h2 style="color:${colors.text};font-family:${customFont};font-weight:700">
        Book Appointment
      </h2>
      <p style="color:${colors.textMuted};margin-bottom:2rem">
        Schedule your visit with ${selectedDoctor.name}
      </p>

      <form id="bookingForm">
        <input type="date" id="appointmentDate" required>
        <select id="appointmentTime" required>
          <option value="">Select Time</option>
          <option>09:00 AM</option>
          <option>10:00 AM</option>
          <option>11:00 AM</option>
          <option>12:00 PM</option>
        </select>
        <button class="btn-hover" style="width:100%">Confirm Booking</button>
      </form>
    </div>
  `;

  document.getElementById('bookingForm').onsubmit = e => {
    e.preventDefault();
    allRecords.push({
      type:'appointment',
      id:Date.now().toString(),
      user:currentUser,
      doctor:selectedDoctor,
      date:appointmentDate.value,
      time:appointmentTime.value,
      status:'pending'
    });
    currentView='appointments';
    renderApp();
  };
}

function backToProfile(){
  currentView='profile';
  renderApp();
}
