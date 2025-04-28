function changeTheme() {
  const theme = document.body.getAttribute("data-theme");
  const newTheme = theme == "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  document.body.setAttribute("data-theme", newTheme);

  const iTheme = document.getElementById("icon-dark-light");
  iTheme.classList =
    newTheme == "dark"
      ? "bi bi-sun-fill icon-dark-light"
      : "bi bi-moon-fill icon-dark-light";
}
