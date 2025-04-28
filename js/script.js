document.addEventListener("DOMContentLoaded", (event) => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme != null) {
    updateTheme(localTheme);
  }
});

function changeTheme() {
  const theme = document.body.getAttribute("data-theme");
  const newTheme = theme == "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);

  updateTheme(newTheme);
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

function updateTheme(theme) {
  updateBody(theme);
  updateIcon(theme);
}

