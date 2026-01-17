import qrUrl from "/qr-url.png";
import './App.css'
import NounLocations from "./NounLocations";
import type { Noun } from "../types/Noun";

const lozko: Noun = {
  word: "łóżko",
  cases: {
    nominative: "łóżko",
    genitive: "łóżka",
    dative: "łóżku",
    accusative: "łóżko",
    instrumental: "łóżkiem",
    locative: "łóżku",
    vocative: "łóżko",
  },
};

function App() {
  return (
    <>
      <div>
        <img src={qrUrl} className="logo" alt="QR code to access the URL via camera" />
      </div>
      <h1>Practice Po Polsku</h1>
      <NounLocations noun={lozko} />
    </>
  )
}

export default App
