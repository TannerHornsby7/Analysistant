import moment from "moment";
import { popform, layout } from "./layout";
import todo from "./holder";
import { renderTiles, renderProjects } from "./render.js";
import "./style.scss";

// Control Flow
let toDoProjects = { Home: [] };
if (storageAvailable("localStorage")) {
  if (!localStorage.length) {
    localStorage.setItem("projects", JSON.stringify(toDoProjects));
  } else {
    toDoProjects = JSON.parse(localStorage.getItem("projects"));
    toDoReviver(toDoProjects);
    // console.log(toDoProjects['Home']);
  }
  // Yippee! We can use localStorage awesomeness
} else {
  // Too bad, no localStorage for us
}

// create basic layout
layout("container", "header", "navbar", "main").compose();

// create responsive render for home by default
renderProjects(toDoProjects);
const ti = taskInterface(toDoProjects.Home);
renderTasks(toDoProjects.Home);
ti.addEvents();
open();
close();

// Add Event Listners==========================================================

// Update Local Storage
document.body.addEventListener("keydown", () => {
  localStorage.setItem("projects", JSON.stringify(toDoProjects));
});

// Clear Local Storage
const clearLocal = document.getElementById("clearLocal");
clearLocal.addEventListener("click", () => {
  const bhead = document.getElementById("bodyhead");
  localStorage.clear();
  toDoProjects = { Home: [] };
  // create responsive render for home by default
  const ti = taskInterface(toDoProjects.Home);
  ti.addEvents();
  renderProjects(toDoProjects);
  renderTasks(toDoProjects.Home);
  bhead.textContent = "INBOX";
});

// FUNCTIONS/CONSTRUCTORS======================================================

// render responsive task dashboard
function taskInterface(project) {
  const addtask = document.getElementById("addtask");
  const inbox = document.getElementById("inbox");
  const today = document.getElementById("day");
  const week = document.getElementById("week");

  function addEvents() {
    // Add Task Event Listener
    const a = addtask.cloneNode(true);
    a.addEventListener("click", addT);
    addtask.replaceWith(a);
    // addtask.remove();

    // Inbox Button
    const i = inbox.cloneNode(true);
    i.addEventListener("click", renderInbox);
    inbox.replaceWith(i);
    // inbox.remove();

    // Today Button
    const t = today.cloneNode(true);
    t.addEventListener("click", renderDayTasks);
    today.replaceWith(t);
    // today.remove();

    // Week Button
    const w = week.cloneNode(true);
    w.addEventListener("click", renderWeekTasks);
    week.replaceWith(w);
    // week.remove();
  }

  function renderInbox() {
    renderTasks(project);
  }

  function renderDayTasks() {
    const todotoday = project.filter((object) => {
      const diff = moment(object.dd, "YYYY-MM-DD").diff(moment(), "hours");
      return diff <= 24 && diff >= 0;
    });
    renderTasks(todotoday);
  }

  function renderWeekTasks() {
    const todoweek = project.filter((object) => {
      const diff = moment(object.dd, "YYYY-MM-DD").diff(moment(), "days");
      return diff <= 7 && diff >= 0;
    });
    renderTasks(todoweek);
  }

  function addT() {
    popform();
    const submitbtn = document.getElementById("submit");

    // Submit Form Event Listener
    submitbtn.addEventListener("click", sub);

    function sub() {
      const formoverlay = document.querySelector(".formoverlay");
      const inputs = getFormInputs();
      const tile = todo(inputs);
      formoverlay.remove();
      project.push(tile);
      renderInbox();
      // Finish Task Event Listeners
      submitbtn.removeEventListener("click", sub);
    }
  }
  // remove interface responsiveness
  function removeEvents() {
    const addtask = document.getElementById("addtask");
    const inbox = document.getElementById("inbox");
    const today = document.getElementById("day");
    const week = document.getElementById("week");

    addtask.removeEventListener("click", addT);
    inbox.removeEventListener("click", renderTasks);
    today.removeEventListener("click", renderDayTasks);
    week.removeEventListener("click", renderWeekTasks);
  }

  return { addEvents, removeEvents, renderInbox };
}
// render current project's tasks
function renderTasks(arr) {
  // Create DOM tiles from task list
  renderTiles(arr);

  // expand tile event listner
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((box) => {
    box.addEventListener("click", (e) => {
      const desc = box.querySelector(".description");
      box.classList.contains("expanded")
        ? box.classList.remove("expanded")
        : box.classList.add("expanded");

      if (box.classList.contains("expanded")) {
        desc.style.display = "block";
      } else {
        desc.style.display = "none";
      }
    });
  });

  // edit tile event listener
  const editbtns = document.querySelectorAll(".edit");
  editbtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      popform();
      const submitbtn = document.getElementById("submit");

      // Submit Form Event Listener
      submitbtn.addEventListener("click", sub);

      function sub() {
        const formoverlay = document.querySelector(".formoverlay");
        const inputs = getFormInputs();
        const tile = todo(inputs);
        formoverlay.remove();
        arr[e.target.dataset.index] = tile;
        renderTasks(arr);
        // Finish Task Event Listeners
        submitbtn.removeEventListener("click", sub);
      }
    });
  });

  // complete task event listener
  const tasks = document.querySelectorAll(".finish");
  tasks.forEach((box) => {
    box.addEventListener("click", (e) => {
      arr.splice(e.target.dataset.index, 1);
      renderTasks(arr);
    });
  });
}
// Event Listener Functions
function getFormInputs() {
  const formEl = document.forms.popform;
  const formData = new FormData(formEl);
  const t = formData.get("title");
  const d = formData.get("description");
  const dd = formData.get("duedate");
  const hp = formData.get("hpriority");
  const mp = formData.get("mpriority");
  let p;

  if (hp) {
    p = "hpriority";
  } else if (mp) {
    p = "mpriority";
  } else {
    p = "lpriority";
  }

  return [t, d, dd, p];
}

/* Local Storage Functions */
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function toDoReviver(pjs) {
  for (const p in pjs) {
    for (let i = 0; i < pjs[p].length; i++) {
      console.log(`Project: ${p}`);
      if (pjs[p][i].hasOwnProperty("arg")) {
        console.log(`Todo: ${pjs[p][i]}`);
        console.log(pjs[p][i]);
        pjs[p][i] = todo(pjs[p][i].arg);
      }
    }
  }
}
