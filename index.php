<!doctype html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Doctor Appointment System</title>

  <!-- SDKs (safe guard added) -->
  <script>
    window.elementSdk = window.elementSdk || {};
    window.dataSdk = window.dataSdk || {};
  </script>

  <!-- External libs -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

  <!-- CSS -->
  <link rel="stylesheet" href="css/style.css">
  <style>@view-transition { navigation: auto; }</style>
  <script src="https://cdn.tailwindcss.com"></script>

</head>

<body class="h-full">
  <div id="app" class="w-full h-full overflow-auto"></div>

  <!-- JS ORDER IS VERY IMPORTANT -->
  <script src="./js/state.js"></script>

<script src="./js/login.js"></script>
<script src="./js/dashboard.js"></script>
<script src="./js/doctors.js"></script>
<script src="./js/profile.js"></script>
<script src="./js/booking.js"></script>
<script src="./js/appointments.js"></script>
<script src="./js/pdf.js"></script>

<script src="./js/app.js"></script>


</body>
</html>
