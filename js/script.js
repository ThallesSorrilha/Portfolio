document.addEventListener("DOMContentLoaded", (event) => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme != null) {
    updateBody(localTheme);
    updateIcon(localTheme);
  }
});

function changeTheme() {
  const theme = document.body.getAttribute("data-theme");
  const newTheme = theme == "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);

  updateBody(newTheme);
  updateIcon(newTheme);
}

function updateBody(theme) {
  document.body.setAttribute("data-theme", theme);
}

function updateIcon(theme) {
  const iTheme = document.getElementById("icon-dark-light");
  iTheme.classList =
    theme == "dark"
      ? "bi bi-sun-fill icon-dark-light"
      : "bi bi-moon-fill icon-dark-light";
}
