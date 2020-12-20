import React, { useState } from "react";
import "./styles.css";

var musicDatabase = {
  Bollywood: [
    {
      songName: "Teri mittti",
      singerName: "Pratik Bachan",
      songUrl: "https://gaana.com/song/teri-mitti"
    },
    {
      songName: "Moh Moh Ke Dhaage",
      singerName: "Monali Thakur",
      songUrl: "https://gaana.com/song/moh-moh-ke-dhaage-female?autoplay=true"
    },
    {
      songName: "Channa Mereya",
      singerName: "Arijit Singh",
      songUrl: "https://gaana.com/song/channa-mereya-from-ae-dil-hai-mushkil-6"
    }
  ],

  Hollywood: [
    {
      songName: "See You Again",
      singerName: "Wiz Knalifa",
      songUrl:
        "https://gaana.com/song/see-you-again-feat-charlie-puth?autoplay=true"
    },
    {
      songName: "Sorry",
      singerName: "Justin Bieber",
      songUrl: "https://gaana.com/song/sorry-586?autoplay=true"
    },
    {
      songName: "Uptown Funk",
      singerName: "Mark Ronson",
      songUrl: "https://gaana.com/song/uptown-funk?autoplay=true"
    }
  ],
  Tollywood: [
    {
      songName: "Tomake Chai",
      singerName: "Ariji Singh",
      songUrl:
        "https://open.spotify.com/album/3iDFXDmtw7p5eSWtI77ihy?highlight=spotify:track:7JhGHG8a28ezPczBbNrPwS"
    },
    {
      songName: "Bojhena Shey Bojhena",
      singerName: "Arijit Singh",
      songUrl:
        "https://open.spotify.com/album/1bV0NI9WZy8aiNyhnmdsas?highlight=spotify:track:7qVh3LNM64eMIboZWvDJON"
    },
    {
      songName: "Parbo na",
      singerName: "Arijit Singh",
      songUrl:
        "https://open.spotify.com/album/2Nu9Wdlzkm1TBt9zV37Eaj?highlight=spotify:track:5WsRN9tE7aScH6bgrc8ibk"
    }
  ]
};

var music = Object.keys(musicDatabase);

export default function App() {
  var [inputHandler, setOutputHAndler] = useState("Bollywood");

  function clickHandler(item) {
    setOutputHAndler(item);
  }

  return (
    <div className="App">
      <h1>Best Songs of all time</h1>

      <div className="btn-primary">
        {music.map(function (item, i) {
          return (
            <button className="btn" key={i} onClick={() => clickHandler(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <ul>
          {musicDatabase[inputHandler].map((movie, a) => (
            <section className="song-card" key={a}>
              <div className="song-description">
                <h2>{movie.songName}</h2>
                <h3>{movie.singerName}</h3>
                <a
                  className="url"
                  href={movie.songUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Play
                </a>
              </div>
            </section>
          ))}
        </ul>
      </div>
    </div>
  );
}
