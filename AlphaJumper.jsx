import React from "react";

const defaultAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%"
};

exports.AlphaJumper = ({
  alphabet = defaultAlphabet,
  color = 'white',
  onTouch = () => null,
  style
}) => (
  <div style={{ ...containerStyle, ...style }}>
    {alphabet.map((character, index) => (
      <div
        key={index}
        onMouseOver={() => onTouch(character)}
        style={{ color, flex: 1 }}
      >
        {character}
      </div>
    ))}
  </div>
);
