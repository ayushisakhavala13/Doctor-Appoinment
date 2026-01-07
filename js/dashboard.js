// DASHBOARD PAGE (UI SAME AS ORIGINAL)
function renderDashboard(container, config, colors) {
  const baseSize = (config && config.font_size) || 16;
  const customFont = (config && config.font_family) || 'Inter';

  container.innerHTML = `
    <div class="slide-up">
      <h1 style="font-size:${baseSize*2.5}px;color:${colors.text};font-family:${customFont};font-weight:700;">
        Welcome back, ${currentUser.name}! 👋
      </h1>
      <p style="color:${colors.textMuted};margin-bottom:2rem;">Manage your health appointments easily</p>

      <button class="btn-hover" onclick="goDoctors()">Browse Doctors</button>
      <button class="btn-hover" onclick="goAppointments()">My Appointments</button>
    </div>
  `;
}

function goDoctors(){
  currentView='doctors';
  renderApp();
}

function goAppointments(){
  currentView='appointments';
  renderApp();
}
