import React, { useEffect, useState } from "react";

import CardComponent from "./Card";
import DrawerMenu from "./DrawerMenu";

const Dashboard = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  const [accessToken, setAccessToken] = useState("");
  const [songId, setSongId] = useState("");

  useEffect(() => {
    const getAccessToken = async () => {
      var authParameters = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      };

      fetch("https://accounts.spotify.com/api/token", authParameters)
        .then((res) => res.json())
        .then((data) => setAccessToken(data.access_token));
    };

    getAccessToken();
  }, []);

  useEffect(() => {
    getRandomTrack("pop");
  }, [accessToken]);

  const getRandomTrack = async (genre) => {
    // console.log("getRandomTrack", accessToken);
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const index = Math.floor(Math.random() * characters.length);
    const trackQuery =
      "%25" + characters.charAt(index) + "%25" + "%20genre:" + genre;
    const randomOffset = Math.floor(Math.random() * 1000);

    var songParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    fetch(
      `https://api.spotify.com/v1/search?q=${trackQuery}&type=track&offset=${randomOffset}`,
      songParameters
    )
      .then((res) => res.json())
      .then((data) => setSongId(data.tracks.items[0].id));
  };

  return (
    <div
      style={{
        margin: "1rem",
      }}
    >
      <DrawerMenu />
      <div className="flex-center flex-gap">
        <iframe
          style={{
            width: "50vw",
            height: "50vh",
            border: "none",
            borderRadius: "1rem",
          }}
          src={`https://open.spotify.com/embed/track/${songId}?utm_source=generator`}
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
        className="flex-center flex-gap"
      >
        <CardComponent
          onClick={() => {
            getRandomTrack("rock");
          }}
          genre="Rock"
          symbol="🤘"
        />
        <CardComponent
          onClick={() => {
            getRandomTrack("hip-hop");
          }}
          genre="Hip-Hop"
          symbol="💰"
        />
        <CardComponent
          onClick={() => {
            getRandomTrack("acoustic");
          }}
          genre="Acoustic"
          symbol="🎸"
        />
      </div>
      <div
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
        className="flex-center flex-gap"
      >
        <CardComponent
          onClick={() => {
            getRandomTrack("k-pop");
          }}
          genre="K-Pop"
          symbol="🇰🇷"
        />
        <CardComponent
          onClick={() => {
            getRandomTrack("mandopop");
          }}
          genre="MandoPop"
          symbol="🀄️"
        />
        <CardComponent
          onClick={() => {
            getRandomTrack("study");
          }}
          genre="Lo-Fi"
          symbol="🎧"
        />
      </div>
    </div>
  );
};

export default Dashboard;
