// Handle contact form submission with Formspree (free contact form service)
const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  // Replace with your Formspree endpoint (after signup)
  const endpoint = "[formspree.io](https://formspree.io/f/YOUR_ENDPOINT)";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      status.textContent = "Thank you! We'll get in touch soon.";
      form.reset();
    } else {
      status.textContent = "Oops! Something went wrong.";
    }
  } catch (error) {
    status.textContent = "Network error. Please try again later.";
  }
});
