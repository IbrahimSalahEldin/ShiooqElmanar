// JavaScript (script.js)

// WhatsApp Button Click Event
document.getElementById("whatsapp-link").addEventListener("click", function () {
  // Replace '123456789' with your full international WhatsApp number
  var phoneNumber = "9660531020893"; // Include your country code (e.g., +1 for the USA)

  // Open WhatsApp with the given number
  window.open("https://wa.me/" + phoneNumber, "_blank");
});

// Call Button Click Event
document.getElementById('call-link').addEventListener('click', function() {
    // Prompt the user to confirm if they want to make a call
    // var confirmCall = confirm('Do you want to make a call?');

    // if (confirmCall) {
        // Replace '123456789' with the phone number you want to call
        var phoneNumber = "9660531800271";

        // Open the device's dialer with the given number
        window.open('tel:' + phoneNumber);
    // }
});
