const root = document.getElementById("root");
root.innerHTML = `
  <h1>Choose your first club!</h1>
  <select id="league">
    <option value="">Select League</option>
    <option value="Spain">Spain</option>
    <option value="England">England</option>
    <option value="Italy">Italy</option>
    <option value="Germany">Germany</option>
    <option value="France">France</option>
  </select>
  <div id="clubs"></div>
`;

const clubsByLeague = {
  Spain: ["Real Madrid", "Barcelona", "Atletico Madrid"],
  England: ["Manchester City", "Liverpool", "Arsenal", "Manchester United", "Chelsea"],
  Italy: ["Napoli", "Inter", "Milan"],
  Germany: ["Bayern Munich", "Dortmund"],
  France: ["PSG"],
};

document.getElementById("league").addEventListener("change", (e) => {
  const league = e.target.value;
  const clubsDiv = document.getElementById("clubs");
  clubsDiv.innerHTML = "";

  if (clubsByLeague[league]) {
    const select = document.createElement("select");
    clubsByLeague[league].forEach((club) => {
      const option = document.createElement("option");
      option.value = club;
      option.textContent = club;
      select.appendChild(option);
    });
    clubsDiv.appendChild(select);
  }
});
