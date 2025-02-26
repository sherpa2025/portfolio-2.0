import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import waveHand from "../../assets/wave-hand.png";
import namaste from "../../assets/namaste.png";
import { TypewriterClass } from "../../types";
import "./home.module.css";

const Type: React.FC = () => {
  const [currentString, setCurrentString] = useState("HELLO!");

  const handleInit = (typewriter: TypewriterClass) => {
    typewriter
      .typeString("HELLO!")
      .callFunction(() => setCurrentString("HELLO!"))
      .pauseFor(3000)
      .deleteAll()
      .typeString("नमस्ते")
      .callFunction(() => setCurrentString("नमस्ते"))
      .pauseFor(3000)
      .start();
  };

  const icon = currentString.charAt(0) === "H" ? waveHand : namaste;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typewriter
        onInit={handleInit}
        options={{
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          wrapperClassName: "typewriter-text",
        }}
      />

      <img
        src={icon}
        alt="icon"
        style={{ width: "60px", marginLeft: "10px" }}
      />
    </div>
  );
};

export default Type;
