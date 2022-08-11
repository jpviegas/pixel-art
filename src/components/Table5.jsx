import { useState } from "react";
import "../style.css";

function Table5() {
  const [color, setColor] = useState("white");
  const n = [1, 2, 3, 4, 5];

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
        <div className="black" onClick={() => setColor("black")} />
        <div className="red" onClick={() => setColor("red")} />
        <div className="green" onClick={() => setColor("green")} />
        <div className="blue" onClick={() => setColor("blue")} />
      </div>

      <h2>Selected color:</h2>
      <p className={color} />
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

export default Table5;
