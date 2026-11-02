const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#mainNav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#inquiryForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("SS COMMUTE Website Enquiry - " + data.get("service"));
  const body = encodeURIComponent(
    "Name: " + data.get("name") + "\n" +
    "Contact: " + data.get("phone") + "\n" +
    "Service: " + data.get("service") + "\n" +
    "Pickup / Destination / Timing: " + (data.get("route") || "Not provided")
  );
  window.location.href = "mailto:sheikhsiddiquicommute@gmail.com?subject=" + subject + "&body=" + body;
});
