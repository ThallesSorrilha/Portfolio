// Eventos para quando o botão claro/escuro for clicado

document.addEventListener("DOMContentLoaded", () => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme != null) {
    updateTheme(localTheme);
  }
});

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

// Funcionalidade da API do GitHub

async function fetchGitHubStats() {
  const username = "ThallesSorrilha";
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados do GitHub");
    }
    const data = await response.json();
    displayGitHubStats(data);
  } catch (error) {
    console.error(error);
  }
}

function displayGitHubStats(data) {
  const statsSection = document.getElementById("div-git-general");
  statsSection.innerHTML = `
      <p>Nome: ${data.name}</p>
      <p>Repositórios Públicos: ${data.public_repos}</p>
    `;
}

fetchGitHubStats();

async function fetchRepos() {
  const username = "ThallesSorrilha";
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(url);
    const repos = await response.json();
    const reposList = repos
      .map(
        (repo) =>
          `<li><a class="link-default" href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
      )
      .join("");
    document.getElementById(
      "div-git-repos"
    ).innerHTML += `<ul>${reposList}</ul>`;
  } catch (error) {
    console.error("Erro ao buscar repositórios:", error);
  }
}

fetchRepos();
