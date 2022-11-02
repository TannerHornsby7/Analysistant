import fin from "./assets/logo.png";
import fla from "./assets/flag.png";
import del from "./assets/del.png";
import open from "./assets/open.png";
import ed from "./assets/edit.png";

const moment = require("moment");

// Render Project Tab from project Array
function rProjects(pjs) {
  const ptab = document.querySelector(".ptab");
  const props = Object.getOwnPropertyNames(projects);

  // Clear Projects
  while (!ptab.lastChild.classList.contains("ptabheader")) {
    ptab.removeChild(ptab.lastChild);
  }

  // Create New project List
  for (const key in props) {
    const ptitle = document.createElement("h4");
    const pcollection = document.createElement("div");
    const pdiv = document.createElement("button");
    const pdel = document.createElement("img");
    const popen = document.createElement("img");

    pdiv.addEventListener("mouseover", () => {
      pdel.style.display = "block";
      popen.style.display = "block";
    });
    pdiv.addEventListener("mouseleave", () => {
      pdel.style.display = "none";
      popen.style.display = "none";
    });

    // setting attributes of project divs
    pcollection.classList.add("pcollection");
    pdiv.classList.add("pbutt");
    pdel.classList.add("pdel");
    popen.classList.add("popen");
    popen.dataset.pindex = key;
    pdel.dataset.pindex = key;
    pdel.src = del;
    pdel.style.display = "none";
    popen.style.display = "none";
    popen.src = open;
    if (pdel.dataset.pindex != 0) pdiv.appendChild(pdel);
    ptitle.textContent = props[key];

    // appending project divs
    pdiv.appendChild(ptitle);
    pdiv.appendChild(popen);
    pcollection.appendChild(pdiv);
    ptab.appendChild(pcollection);
  }
}

function rProject(pj, pjs) {
  if (!pj) return;
  const tiles = document.createElement("div");
  tiles.id = "tiles";
  for (let i = 0; i < pj.length; i++) {
    const tile = rTile(pj[i], i);

    tiles.appendChild(tile);
  }

  return tiles;
}

// Create DOM Element for Todo
function rTile(obj, index) {
  const finish = document.createElement("img");
  const flag = document.createElement("img");
  const edit = document.createElement("img");
  const headdiv = document.createElement("div");
  const tile = document.createElement("div");
  const tiletop = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const duedate = document.createElement("p");
  let flags = 0;

  tiletop.classList.add("tiletop");
  tile.classList.add("tile");
  flag.classList.add("flag");
  edit.classList.add("edit");
  edit.src = ed;
  edit.title = "edit";
  flag.src = fla;
  flag.title = "priority";
  finish.classList.add("finish");
  finish.src = fin;
  finish.title = "done?";
  finish.dataset.index = index;
  edit.dataset.index = index;

  // setting head div content
  headdiv.appendChild(finish);
  if (obj.p == "mpriority") {
    flags = 1;
  } else if (obj.p == "hpriority") {
    flags = 2;
  }
  for (let i = 0; i < flags; i++) {
    headdiv.appendChild(flag.cloneNode());
  }
  tiletop.appendChild(headdiv);

  // setting tile content
  title.textContent = obj.t;
  description.textContent = obj.d;
  description.classList.add("description");
  description.style.display = "none";
  duedate.textContent = moment(obj.dd, "YYYY-MM-DD").format("MMMM D, YYYY");
  if (duedate.textContent === "Invalid date") {
    duedate.textContent = "";
  }
  tiletop.appendChild(title);
  tiletop.appendChild(duedate);
  tiletop.appendChild(edit);
  tile.appendChild(tiletop);
  tile.appendChild(description);

  // console.log(obj[t]);
  return tile;
}

export { rProject, rProjects };
