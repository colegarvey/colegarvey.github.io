document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("statusMessage");

  const workerUrl = "https://contact-message.colemiester19.workers.dev";

//   if (message.length < 10) {
//     // status.textContent = "Message must be at least 10 characters.";
//     return;
//   }

  status.textContent = "Sending...";

  try {
    const res = await fetch(workerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    if (res.ok) {
      status.textContent = "Message sent!";
      document.getElementById("message").value = "";
      document.getElementById("charCount").textContent = "0";
    } else {
      status.textContent = "Failed to send message.";
    }
  } catch (err) {
    status.textContent = "Failed to send message.";
  }
});
