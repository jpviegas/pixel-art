/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import "../style.css";

function Table9() {
  const [color, setColor] = useState("white");
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function clear() {
    const black = document.querySelectorAll("td.black");
    for (let i = 0; i < black.length; i + 1) {
      black[i].classList.replace("black", "white");
    }
    const red = document.querySelectorAll("td.red");
    for (let i = 0; i < red.length; i + 1) {
      red[i].classList.replace("red", "white");
    }
    const green = document.querySelectorAll("td.green");
    for (let i = 0; i < green.length; i + 1) {
      green[i].classList.replace("green", "white");
    }
    const blue = document.querySelectorAll("td.blue");
    for (let i = 0; i < blue.length; i + 1) {
      blue[i].classList.replace("blue", "white");
    }
  }

  return (
    <>
      <h2>Color palette</h2>
      <div className="color-palette">
        <div
          className="black"
          onKeyDown={null}
          onClick={() => setColor("black")}
        />
        <div className="red" onKeyDown={null} onClick={() => setColor("red")} />
        <div
          className="green"
          onKeyDown={null}
          onClick={() => setColor("green")}
        />
        <div
          className="blue"
          onKeyDown={null}
          onClick={() => setColor("blue")}
        />
      </div>

      <div className="selected">
        <h2>Selected color:</h2>
        <div className={color} />
      </div>
      <button type="button" className="clear" onClick={() => clear()}>
        Clear table
      </button>

      <table>
        <tbody>
          {n.map((x, index) => (
            <tr key={index}>
              {n.map((y, index) => (
                <td
                  key={index}
                  className="white"
                  onKeyDown={() => null}
                  onClick={(e) => (e.target.className = color)}
                  onDoubleClick={(e) => (e.target.className = "white")}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table9;
