window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    el.classList.add("active");
  });
});

/* ===== Formspree Submit Handler ===== */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("success-message");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        form.style.display = "none";
        msg.style.display = "block";
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(() => {
      alert("Network error. Please try again.");
    });
  });
});




