function renderLogin(container, config, colors) {
  const baseSize = config.font_size || 16;
  const customFont = config.font_family || "Inter";

  container.style.background = colors.bg;

  container.innerHTML = `
    <div style="
      min-height:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:2rem;
      background:linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15);
    ">
      <div class="slide-up" style="
        background:${colors.surface};
        padding:3rem;
        border-radius:1.5rem;
        max-width:450px;
        width:100%;
        border:1px solid ${colors.border};
        box-shadow:0 20px 60px rgba(0,0,0,0.3);
      ">

        <!-- ICON -->
        <div style="text-align:center;margin-bottom:2rem;">
          <div style="font-size:${baseSize * 4}px;margin-bottom:1rem;">🏥</div>
          <h1 style="
            font-size:${baseSize * 2}px;
            font-family:${customFont};
            color:${colors.text};
            font-weight:700;
            margin-bottom:0.5rem;
          ">
            ${config.site_title}
          </h1>
          <p style="color:${colors.textMuted};">
            ${config.welcome_text}
          </p>
        </div>

        <!-- FORM -->
        <form id="loginForm">

          <!-- FULL NAME -->
          <div style="margin-bottom:1.5rem;">
            <label style="
              display:block;
              font-size:${baseSize * 0.9}px;
              color:${colors.text};
              margin-bottom:0.5rem;
              font-weight:600;
            ">
              Full Name
            </label>
            <input
              id="userName"
              required
              placeholder="Enter your full name"
              style="
                width:100%;
                padding:0.875rem;
                border-radius:0.75rem;
                border:2px solid ${colors.border};
                background:${colors.bg};
                color:${colors.text};
                font-size:${baseSize}px;
              "
            />
          </div>

          <!-- EMAIL -->
          <div style="margin-bottom:1.5rem;">
            <label style="
              display:block;
              font-size:${baseSize * 0.9}px;
              color:${colors.text};
              margin-bottom:0.5rem;
              font-weight:600;
            ">
              Email Address
            </label>
            <input
              id="userEmail"
              type="email"
              required
              placeholder="your.email@example.com"
              style="
                width:100%;
                padding:0.875rem;
                border-radius:0.75rem;
                border:2px solid ${colors.border};
                background:${colors.bg};
                color:${colors.text};
                font-size:${baseSize}px;
              "
            />
          </div>

          <!-- PHONE -->
          <div style="margin-bottom:2rem;">
            <label style="
              display:block;
              font-size:${baseSize * 0.9}px;
              color:${colors.text};
              margin-bottom:0.5rem;
              font-weight:600;
            ">
              Phone Number
            </label>
            <input
              id="userPhone"
              required
              placeholder="+1 (555) 000-0000"
              style="
                width:100%;
                padding:0.875rem;
                border-radius:0.75rem;
                border:2px solid ${colors.border};
                background:${colors.bg};
                color:${colors.text};
                font-size:${baseSize}px;
              "
            />
          </div>

          <!-- BUTTON -->
          <button
            class="btn-hover"
            style="
              width:100%;
              padding:1rem;
              background:linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
              color:white;
              font-size:${baseSize * 1.05}px;
              font-weight:600;
              border:none;
              border-radius:0.75rem;
              cursor:pointer;
              box-shadow:0 4px 12px ${colors.primary}40;
            "
          >
            ${config.login_btn_text}
          </button>
        </form>

        <!-- FOOTER -->
        <div style="
          margin-top:1.5rem;
          padding-top:1.5rem;
          border-top:1px solid ${colors.border};
          text-align:center;
        ">
          <p style="font-size:${baseSize * 0.85}px;color:${colors.textMuted};">
            🔒 Your information is secure and private
          </p>
        </div>

      </div>
    </div>
  `;

  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    currentUser = {
      name: userName.value,
      email: userEmail.value,
      phone: userPhone.value
    };
    currentView = "dashboard";
    renderApp();
  });
}
