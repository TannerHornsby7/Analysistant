// Information holding object

const todo = (arg) => {
  
  return {
    type: "Todo",
    t: arg[0],
    d: arg[1],
    dd: arg[2],
    p: arg[3]
  }
};

function Projects(projArr) {
  this.projArr = projArr;
}

function Project(name, todoArray) {
  this.name = name;
  this.todoArray = todoArray;
}

Project.constructor.addProject() {
  // Add Project
  const addproj = document.getElementById("addproject");
  addproj.addEventListener("click", (e) => {
    if (Object.keys(toDoProjects).length < 5) {
      // create project form
      const finput = document.createElement("input");
      const ptab = document.querySelector(".ptab");
      const indiv = document.createElement("div");

      // setting indiv
      indiv.classList.add("indiv");

      // setting input
      finput.type = "text";
      finput.title = "Project Title";

      indiv.appendChild(finput);
      ptab.appendChild(indiv);

      finput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          addProject(finput.value);
          indiv.style.display = "none";
        }
      });
    } else {
      e.target.title = "project limit reached";
    }
  });
}

// add project events and functionalities
function addProject(p) {
  // Adding Project Menu Event Listeners
  const bhead = document.getElementById("bodyhead");

  if (pjs[p] !== null) return "Project Already Exists"

  // setting new project
  pjs[p] = []; // creating empty task array
  renderProjects(pjs); // rendering the new project list
  open(); // adding open 
  close(); // and close funcitonality to new project list
  taskInterface(pjs[p]).addEvents(); // adding new project's events
  bhead.textContent = p;
}
// open a project
function open() {
  const popen = document.querySelectorAll(".popen");
  const props = Object.getOwnPropertyNames(toDoProjects);
  const bhead = document.getElementById("bodyhead");

  // Open Project Listeners
  popen.forEach((b) => {
    // console.log(b);
    b.addEventListener("click", (e) => {
      const curr = props[e.target.dataset.pindex];
      renderTasks(toDoProjects[curr]);
      const cp = taskInterface(toDoProjects[curr]);
      cp.addEvents();
      bhead.textContent = props[e.target.dataset.pindex];
      open();
      close();
    });
  });
}
// close a project
function close() {
  const pdels = document.querySelectorAll(".pdel");
  const props = Object.getOwnPropertyNames(toDoProjects);
  const bhead = document.getElementById("bodyhead");

  // Delete Project Listeners
  pdels.forEach((pdel) => {
    pdel.addEventListener("click", (e) => {
      const curr = props[e.target.dataset.pindex];
      delete toDoProjects[curr];
      renderProjects(toDoProjects);
      const home = taskInterface(toDoProjects.Home);
      home.addEvents();
      renderTasks(toDoProjects.Home);
      bhead.textContent = "Home";
      open();
      close();
    });
  });
}
export default todo;


// add opening and closing elistners occur on every project rerender so you don't
//add extra time re iterating through all projects