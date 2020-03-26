import React from "react";
import Sayac from "../components/Sayac";
import SayiArt from "../components/SayiArt";
import SayiAzalt from "../components/SayiAzalt";

export default function App() {
  return (
    <div>
      <h2>React-Redux Kullanımı</h2>
      <hr />
      <Sayac />
      <br />
      <SayiArt />
      <br />
      <SayiAzalt />
    </div>
  );
}
