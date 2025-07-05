async function addSong() {
  const name = document.getElementById('playerName').value.trim();
  const query = document.getElementById('searchTitle').value.trim();

  if (!name || !query) {
    alert('Wpisz imię i tytuł piosenki');
    return;
  }

  const res = await fetch(`http://localhost:3000/search?q=${encodeURIComponent(query)}`);
  const data = await res.json();

  if (!data.link) {
    alert('Nie znaleziono piosenki');
    return;
  }

  if (!currentPlayer) {
    currentPlayer = { name, songs: [] };
  }

  currentPlayer.songs.push({ link: data.link, owner: name });
  document.getElementById('searchTitle').value = '';
  showCurrentSongs();
}
