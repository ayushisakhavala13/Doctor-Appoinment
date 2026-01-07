// OUR EXPERT DOCTORS (UI SAME AS ORIGINAL)
function renderDoctors(container, config, colors) {
  const baseSize = (config && config.font_size) || 16;
  const customFont = (config && config.font_family) || 'Inter';

  const doctorsHTML = doctors.map(doctor => `
    <div class="card-hover" style="background:${colors.surface};border:2px solid ${colors.border};padding:2rem;border-radius:1rem;margin-bottom:1.5rem;">
      <div style="display:flex;gap:1.5rem;">
        <div style="font-size:${baseSize*3}px">${doctor.emoji}</div>
        <div>
          <h3 style="font-size:${baseSize*1.2}px;font-family:${customFont};color:${colors.text};font-weight:700;">
            ${doctor.name}
          </h3>
          <p style="color:${colors.primary};font-weight:600">${doctor.specialization}</p>
          <p style="color:${colors.textMuted};font-size:${baseSize*0.9}px">${doctor.bio}</p>
        </div>
      </div>

      <div style="display:flex;gap:1rem;margin-top:1rem">
        <button class="btn-hover" onclick="openDoctorProfile('${doctor.id}')">View Profile</button>
        <button class="btn-hover" onclick="bookDoctor('${doctor.id}')">${config.book_btn_text}</button>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <button class="btn-hover" onclick="goDashboard()">← Back to Dashboard</button>
    <h2 style="margin:1.5rem 0;color:${colors.text};font-family:${customFont};font-weight:700;">
      Our Expert Doctors
    </h2>
    ${doctorsHTML}
  `;
}

function openDoctorProfile(id){
  selectedDoctor = doctors.find(d => d.id === id);
  currentView = 'profile';
  renderApp();
}

function bookDoctor(id){
  selectedDoctor = doctors.find(d => d.id === id);
  currentView = 'book';
  renderApp();
}

function goDashboard(){
  currentView = 'dashboard';
  renderApp();
}
