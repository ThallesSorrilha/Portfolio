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
  const generalContainer = document.getElementById("div-git-general");
  const name = document.createElement("p");
  const pubRepos = document.createElement("p");
  name.textContent = "Nome: " + data.name;
  pubRepos.textContent = "Repositórios Públicos: " + data.public_repos;
  generalContainer.appendChild(name);
  generalContainer.appendChild(pubRepos);
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
  const reposContainer = document.getElementById("div-git-repos");
  const ul = document.createElement("ul");
  data.forEach((repo) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("link-default");
    link.href = repo.html_url;
    link.target = "_blank";
    link.textContent = repo.name;
    listItem.appendChild(link);
    ul.appendChild(listItem);
  });
  reposContainer.appendChild(ul);
}
searchGitRepos("ThallesSorrilha");
