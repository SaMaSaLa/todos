const addEl = document.getElementById("add");
const deleteAllEl = document.getElementById("delete-all");
const divEl = document.getElementById("div");

let j = 1;
let todos = [];

let pST = localStorage.getItem("todos");
let pPT = JSON.parse(pST);


for (let i = 0; i < pPT; i++) {
  divEl.innerText = "";
  let pth = document.createElement("p");
  pth.textContent = pPT[i];
  divEl.appendChild(pth);
  pth.style.display = "inline-block";

  let deleteButton2 = document.createElement("button");
  deleteButton2.textContent = "Delete";
  divEl.appendChild(deleteButton2);
}

addEl.addEventListener("click", () => {
  let todoEl = document.getElementById("added-todo");
  for (let i = j; i <= j; i++) {
    let todo = `${i}: ${todoEl.value}`;
    todos.push(todo);
    let ptw = document.createElement("p");
    ptw.textContent = todo;
    ptw.style.display = "inline-block";
    divEl.appendChild(ptw);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    divEl.appendChild(deleteButton);
    const todosStringed = JSON.stringify(todos);
    localStorage.setItem("todos", todosStringed);
    deleteButton.addEventListener("click", function () {
      let parsed = JSON.parse(localStorage.getItem("todos"));
      let item = parsed[i - 1];
      deleteButton.addEventListener("click", () => {
        localStorage.removeItem(todos[0])
      });
    });
  }
  j++;
});

deleteAllEl.addEventListener("click", function () {
  divEl.innerText = "";
  localStorage.clear();
});
