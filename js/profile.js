// DOCTOR PROFILE (UI SAME AS ORIGINAL)
function renderDoctorProfile(container, config, colors) {
  const baseSize = (config && config.font_size) || 16;
  const customFont = (config && config.font_family) || 'Inter';

  container.innerHTML = `
    <button class="btn-hover" onclick="goDoctors()">← Back to Doctors</button>

    <div class="slide-up" style="background:${colors.surface};border:2px solid ${colors.border};
      padding:3rem;border-radius:1.5rem;margin-top:2rem;max-width:900px;">

      <div style="display:flex;gap:2rem;margin-bottom:2rem">
        <div style="font-size:${baseSize*6}px">${selectedDoctor.emoji}</div>
        <div>
          <h1 style="font-size:${baseSize*2}px;color:${colors.text};font-family:${customFont};font-weight:700;">
            ${selectedDoctor.name}
          </h1>
          <p style="color:${colors.primary};font-weight:600;font-size:${baseSize*1.1}px">
            ${selectedDoctor.specialization}
          </p>
        </div>
      </div>

      <div style="background:${colors.bg};padding:1.5rem;border-radius:1rem;margin-bottom:1.5rem">
        <h3 style="color:${colors.text};font-weight:700">About</h3>
        <p style="color:${colors.textMuted}">${selectedDoctor.bio}</p>
      </div>

      <button class="btn-hover" style="width:100%" onclick="bookFromProfile()">Book Appointment</button>
    </div>
  `;
}

function goDoctors(){
  currentView = 'doctors';
  renderApp();
}

function bookFromProfile(){
  currentView = 'book';
  renderApp();
}
