let add = document.getElementById("add-btn");
let deleteAll = document.getElementById("del-all-btn");

const addTodoToLocalStorage = (todo) => {
  // Test if todo is not empty, not null, not undefined, not empty after trimmed
  if (todo === null || todo === undefined || todo.trim() === "") {
    return;
  }

  // Get todo string from local storage
  const todoString = localStorage.getItem("todos");

  // Convert todo string to an array
  let todoArray = JSON.parse(todoString);

  // Check if todo array is null
  if (todoArray === null) {
    todoArray = [];
  }

  // push todo to todo array
  todoArray.push(todo);

  // convert todo array to todo string
  const todoArrayStringed = JSON.stringify(todoArray);

  // save todo string in local storage
  localStorage.setItem("todos", todoArrayStringed);

  // Call render todos ui from local storage here
  renderTodosUIFromLocalStorage();
};

const deleteTodoFromLocalStorage = (index) => {
  // Test if index is not null or undefined
  if (index === null || index === undefined) {
  } else {
    // Get todo string from local storage
    let todoString = localStorage.getItem("todos");

    // Convert todo string to an array
    let todoArray = JSON.parse(todoString);

    // Check if todo array is null
    if (todoArray === null) {
      todoArray = [];
    }
    // delete todo at index from todo array
    todoArray.splice(index, 1);

    // convert todo array to todo string
    let todoArrayStringed = JSON.stringify(todoArray);

    // save todo string in local storage
    localStorage.setItem("todos", todoArrayStringed);

    // Call render todos ui from local storage here
    renderTodosUIFromLocalStorage();
  }
};

const deleteAllTodosFromLocalStorage = () => {
  // clear everything from local storage
  localStorage.clear();

  // Call render todos ui from local storage here
  renderTodosUIFromLocalStorage();
};

// Update UI here.
// Render all the items that we have in Local Storage
const renderTodosUIFromLocalStorage = () => {
  // Empty todo elements
  const todosContainer = document.getElementById("todos-container");
  todosContainer.innerText = "";

  // Create new OL element
  const olEl = document.createElement("ol");
  todosContainer.appendChild(olEl);

  // Get todo string from local storage
  let todoString = localStorage.getItem("todos");

  // Convert todo string to an array
  let todoArray = JSON.parse(todoString);

  // Check if todo array is null
  if (todoArray === null) {
    todoArray = [];
  }
  // If todo array has 0 elements: show "No Todos"
  // If we have more than 0 elements, then
  if (todoArray.length === 0) {
    let p = document.createElement("p");
    p.textContent = "No Todos";
    todosContainer.appendChild(p);
  } else if (todoArray.length > 0) {
    // Iterate on each todo

    for (let i = 0; i < todoArray.length; i++) {
      //      create a new elementdataindex
      let li = document.createElement("li");

      //Add todo in it
      li.textContent = todoArray[i];

      //Create Delete button
      let dltBtn = document.createElement("button");
      dltBtn.textContent = "Delete";

      //Add data-index attribute to the delete button
      // we should set the index number in data-index
      dltBtn.setAttribute("data-index", i);

      //Add delete button in it
      li.appendChild(dltBtn);

      //append to container
      olEl.appendChild(li);
    }
  }

  const txtAreaEl = document.getElementById("txt-area");

  // Focus in input
  txtAreaEl.focus();
  // Clear input
  txtAreaEl.value = "";
};

// On first load make sure to render UI from todos
// Call render todos ui from local storage here
renderTodosUIFromLocalStorage();

// Add event listeners here

// Add click event on "Add" button
add.addEventListener("click", () => {
  const textArea = document.getElementById("txt-area");
  const todo = textArea.value;
  addTodoToLocalStorage(todo);
});

// Add click event on "Delete All" button
deleteAll.addEventListener("click", deleteAllTodosFromLocalStorage);

// Add click event on todos container and make sure to check event.target for delete item is clicked
const todosContainer = document.getElementById("todos-container");
todosContainer.addEventListener("click", function (e) {
  if (e.target.textContent === "Delete") {
    deleteTodoFromLocalStorage(e.target.getAttribute("data-index"));
  }
});
