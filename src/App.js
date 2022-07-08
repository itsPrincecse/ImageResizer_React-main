import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [wid, setWid] = useState(320);
  const [heigh, setHeigh] = useState(320);

  function WidthAdjuster() {
    var slider = document.getElementById("width-slider");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value * 100;
    setWid(slider.value * 100);
  }
  function heightAdjuster() {
    var slid = document.getElementById("height-slider");
    var outp = document.getElementById("demo2");
    outp.innerHTML = slid.value * 100;
    setHeigh(slid.value * 100);
  }

  return (
    <div className="App">
      <img
        src="ImageToResize.jpeg"
        id="resizable-img"
        alt="img"
        width={`${wid}px`}
        height={`${heigh}px`}
      />
      <div>
        <label>Adjust width : </label>
        <input
          type="range"
          id="width-slider"
          min="1"
          max="8"
          step="1"
          onChange={WidthAdjuster}
        />
      </div>

      <div>
        <label>Adjust height : </label>
        <input
          type="range"
          id="height-slider"
          min="1"
          max="8"
          step="1"
          onChange={heightAdjuster}
        />
      </div>

      <div>
        <p>
          width: <span id="demo"></span>px
        </p>
      </div>

      <div>
        <p>
          height: <span id="demo2"></span>px
        </p>
      </div>
    </div>
  );
}
