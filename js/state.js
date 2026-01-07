const defaultConfig = {
  background_color: "#0f172a",
  surface_color: "#1e293b",
  text_color: "#f1f5f9",
  primary_color: "#3b82f6",
  secondary_color: "#10b981",
  site_title: "HealthCare Plus",
  welcome_text: "Your health, our priority",
  login_btn_text: "Login to Continue",
  book_btn_text: "Book Appointment",
  font_family: "Inter",
  font_size: 16
};

let allRecords = [];
let currentUser = null;
let currentView = "login";
let selectedDoctor = null;
let isDarkMode = true;
