function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

function createCard(date, day, games) {
  return `
  <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
      <img src="./assets/logo.svg" alt="Logo da NLW">
  </header>
  <main id="cards">
    ${createCard(
      "21/11",
      "segunda",
      createGame("brazil", "08:00", "cameroon") +
        createGame("hungary", "13:00", "argentina") +
        createGame("colombia", "16:00", "japan")
    )}
    ${createCard(
      "24/11",
      "quinta",
      createGame("british-columbia", "08:00", "cameroon") +
        createGame("india", "13:00", "armenia") +
        createGame("comoros", "16:00", "jordan")
    )}
    ${createCard(
      "28/11",
      "segunda",
      createGame("south-korea", "10:00", "ghana") +
        createGame("brazil", "13:00", "switzenland") +
        createGame("portugal", "16:00", "argentina")
    )}
  </main>
`