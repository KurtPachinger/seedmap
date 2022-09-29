import "./styles.scss";
import { seedmap } from "./seedmap.js";

let cfg = {
  seed: 1,
  size: 256,
  qty: 6
};

// init
let gui = document.createElement("fieldset");
let legend = document.createElement("legend");
legend.innerText = "seedmap";
gui.innerHTML += "<p>Noise preserves major quadrants cross-resolution.</p>";
gui.appendChild(legend);
Object.entries(cfg).forEach(function ([key, value]) {
  // input
  let label = document.createElement("label");
  label.innerText = key + ":";
  label.setAttribute("for", key);
  let input = document.createElement("input");
  input.id = key;
  input.type = "number";
  input.value = value;
  input.min = 0;
  input.step = 1;

  // DOM input
  label.append(input);
  gui.append(label);

  // update
  input.addEventListener("change", function (e) {
    cfg[e.target.id] = e.target.value;
    let res = seedmap(cfg.seed, cfg.size, cfg.qty);
    // DOM result
    document
      .querySelector("label[for=seed]")
      .setAttribute("data-res", res.seed);
    dst.innerHTML = [res.dat.time, "ms", "<hr />"].join("");
    res.map.forEach((i) => dst.appendChild(i));
  });
});

// DOM fieldset
document.body.append(gui);
// DOM canvas
let dst = document.createElement("div");
dst.id = "dst";
document.body.append(dst);
