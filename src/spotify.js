const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://gnohgnij.github.io/spotify-roulette/";
const clientId = process.env.REACT_APP_CLIENT_ID;

const scopes = [
  "user-read-playback-state",
  "user-read-currently-playing",
  "streaming",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

export const logoutUrl = redirectUri;

// loginUrl = "https://accounts.spotify.com/authorize?client_id=YourClientId&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"
