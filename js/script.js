/* Eventos para quando o botão claro/escuro for clicado */

// Traz valor de tema do localStorage
document.addEventListener("DOMContentLoaded", () => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme != null) {
    updateTheme(localTheme);
  }
});

// Escuta botão de troca de tema
document
  .getElementById("bt-change-theme")
  .addEventListener("click", changeTheme);

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

/* Funcionalidade da API do GitHub */

// GitHub - informções gerais
function searchGitHubStats(username) {
  const url = `https://api.github.com/users/${username}`;
  try {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        displayGitStats(data);
      });
  } catch (error) {
    console.error("Erro ao buscar status: ", error);
  }
}
// Exibir status do GitHub
function displayGitStats(data) {
  const statsSection = document.getElementById("div-git-general");
  statsSection.innerHTML = `
      <p>Nome: ${data.name}</p>
      <p>Repositórios Públicos: ${data.public_repos}</p>
    `;
}
searchGitHubStats("ThallesSorrilha");

// GitHub - repositórios
function searchGitRepos(username) {
  const url = `https://api.github.com/users/${username}/repos`;
  try {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        displayGitRepos(data);
      });
  } catch (error) {
    console.error("Erro ao buscar repositórios: ", error);
  }
}
// Exibir repositórios
function displayGitRepos(data) {
  const reposList = data
    .map(
      (repo) =>
        `<li><a class="link-default" href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
    )
    .join("");
  document.getElementById("div-git-repos").innerHTML += `<ul>${reposList}</ul>`;
}
searchGitRepos("ThallesSorrilha");
