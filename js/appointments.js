// MY APPOINTMENTS (UI SAME AS ORIGINAL)
function renderAppointments(container, config, colors) {
  const baseSize = config.font_size || 16;
  const customFont = config.font_family || 'Inter';

  const myAppointments = allRecords.filter(r => r.type==='appointment');

  if(myAppointments.length===0){
    container.innerHTML = `
      <button class="btn-hover" onclick="goDashboard()">← Back</button>
      <p style="color:${colors.textMuted};margin-top:2rem">No appointments yet</p>
    `;
    return;
  }

  container.innerHTML = `
    <button class="btn-hover" onclick="goDashboard()">← Back</button>
    <h2 style="color:${colors.text};font-family:${customFont};font-weight:700;margin:1.5rem 0">
      My Appointments
    </h2>
    ${myAppointments.map(a=>`
      <div class="card-hover" style="background:${colors.surface};border:2px solid ${colors.border};
        padding:2rem;border-radius:1rem;margin-bottom:1.5rem">
        <h3 style="color:${colors.text}">${a.doctor.name}</h3>
        <p style="color:${colors.textMuted}">${a.date} - ${a.time}</p>
        <button class="btn-hover" onclick="downloadAppointmentPDF('${a.id}')">Download PDF</button>
      </div>
    `).join('')}
  `;
}

function goDashboard(){
  currentView='dashboard';
  renderApp();
}
