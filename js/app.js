function getColors() {
  const cfg = window.elementSdk?.config || defaultConfig;

  if (isDarkMode) {
    return {
      bg: cfg.background_color || "#0f172a",
      surface: cfg.surface_color || "#1e293b",
      text: cfg.text_color || "#f1f5f9",
      textMuted: "#94a3b8",
      border: "#334155",
      primary: cfg.primary_color || "#3b82f6",
      secondary: cfg.secondary_color || "#10b981"
    };
  } else {
    return {
      bg: "#f8fafc",
      surface: "#ffffff",
      text: "#0f172a",
      textMuted: "#64748b",
      border: "#e2e8f0",
      primary: cfg.primary_color || "#3b82f6",
      secondary: cfg.secondary_color || "#10b981"
    };
  }
}

async function initSDK() {
  // DATA SDK
  if (window.dataSdk) {
    await window.dataSdk.init({
      onDataChanged(data) {
        allRecords = data;
      }
    });
  }

  // ELEMENT SDK (🔥 THIS WAS MISSING)
  if (window.elementSdk) {
    window.elementSdk.init({
      defaultConfig,
      onConfigChange: () => renderApp()
    });
  }
}

function renderApp() {
  const app = document.getElementById("app");
  const config = window.elementSdk?.config || defaultConfig;
  const colors = getColors();

  if (currentView === "login") renderLogin(app, config, colors);
  if (currentView === "dashboard") renderDashboard(app, config, colors);
  if (currentView === "doctors") renderDoctors(app, config, colors);
  if (currentView === "profile") renderDoctorProfile(app, config, colors);
  if (currentView === "book") renderBooking(app, config, colors);
  if (currentView === "appointments") renderAppointments(app, config, colors);
}

document.addEventListener("DOMContentLoaded", async () => {
  await initSDK();
  renderApp();
});
