// const todosContainerEl = document.getElementById("todos-container");
// const addBtnEl = document.getElementById("add-btn");
// const delAllBtnEl = document.getElementById("del-all-btn");
// const txtArea = document.getElementById("txt-area");

// const olEl = document.createElement("ol");

// let todos = [];

// let todosStringed = localStorage.getItem("todos");
// let todosParsed = JSON.parse(todosStringed);

// // append olEl to todosContainerEl
// todosContainerEl.appendChild(olEl);

// const renderTodos = (i) => {};

// const setTodosToLocalStorage = () => {
//   // parsing peoples todos
//   let parsedTodos = JSON.stringify(todos);

//   // setting item in local storage
//   localStorage.setItem("todos", parsedTodos);
// };

// const renderTodosUI = () => {
//   // clean everything in ol
//   olEl.innerText = "";

//   for (let i = 0; i < todos.length; i++) {
//     // create li
//   }
// };

// const addTodosToLocalStorage = () => {
//   // add li
//   let li = document.createElement("li");

//   // add text content
//   li.textContent = txtArea.value;

//   // append to ol
//   olEl.appendChild(li);

//   // push to peoplesTodos
//   todos.push(txtArea.value);

//   // set to local storage
//   setTodosToLocalStorage();

//   // add delete button
//   const dltBtn = document.createElement("button");
//   dltBtn.textContent = "Delete";

//   // append delete button
//   li.appendChild(dltBtn);
// };

// const deleteTodosfromLocalStorage = () => {};

// const clearTodosFromLocalStorage = () => {
//   //clear div
//   todosContainerEl.innerText = "";

//   //clear local storage
//   localStorage.clear();
// };

// addBtnEl.addEventListener("click", addTodosToLocalStorage);
// delAllBtnEl.addEventListener("click", clearTodosFromLocalStorage);

// Only change Local Storage - Don't create/touch/look at UI

const addTodoToLocalStorage = (todo) => {
  // Test if todo is not empty, not null, not undefined, not empty after trimmed
  // Get todo string from local storage
  // Convert todo string to an array
  // Check if todo array is null
  // push todo to todo array
  // convert todo array to todo string
  // save todo string in local storage
  // Call render todos ui from local storage here
};

const deleteTodoFromLocalStorage = (index) => {
  // Test if index is not null or undefined
  // Get todo string from local storage
  // Convert todo string to an array
  // Check if todo array is null
  // delete todo at index from todo array
  // convert todo array to todo string
  // save todo string in local storage
  // Call render todos ui from local storage here
};

const deleteAllTodosFromLocalStorage = () => {
  // clear everything from local storage
  // Call render todos ui from local storage here
};

// Update UI here.
// Render all the items that we have in Local Storage
const renderTodosUIFromLocalStorage = () => {
  // Empty todo elements
  // Get todo string from local storage
  // Convert todo string to an array
  // Check if todo array is null
  // If todo array has 0 elements: show "No Todos"
  // If we have more than 0 elements, then
  //      Iterate on each todo
  //      create a new element
  //      Add todo in it
  //      Add delete button in it
  //      Add data-index attribute with the todo index
  //      append to container
  // Focus in input
  // Clear input
};

// On first load make sure to render UI from todos
// Call render todos ui from local storage here

// Add event listeners here
// Add click event on "Add" button
// Add click event on "Delete All" button
// Add click event on todos container and make sure to check event.target for delete item is clicked
