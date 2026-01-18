// game.js
// Scaty Server - Oyun Listesi Gösterimi
// Bu dosya sayfaya oyun öğelerini otomatik olarak ekler

// Oyun verileri (ileride buraya daha fazla oyun eklenebilir)
const games = [
  {
    name: "Flappy Bird",
    url: "https://scaty-web.github.io/Scaty-Server/server/game/flappybird.html",
    description: "Klasik Flappy Bird web sürümü"
  }
];

// Oyunları sayfada göster
function renderGames() {
  const container = document.getElementById("game-list");
  if (!container) {
    console.error("game-list id'li bir div bulunamadı!");
    return;
  }

  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    const title = document.createElement("h3");
    title.textContent = game.name;

    const desc = document.createElement("p");
    desc.textContent = game.description;

    const link = document.createElement("a");
    link.href = game.url;
    link.textContent = "Oyunu Aç";
    link.target = "_blank";
    link.rel = "noopener";

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);

    container.appendChild(card);
  });
}

// Sayfa yüklendiğinde çalıştır
window.addEventListener("DOMContentLoaded", renderGames);
