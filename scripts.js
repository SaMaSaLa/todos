const addTodoToLocalStorage = (todo) => {
  const txtAreaEl = document.getElementById("txt-area");
  // Test if todo is not empty, not null, not undefined, not empty after trimmed

  if (todo === null || todo === undefined || todo.trim() === "") {
    txtAreaEl.placeholder = "Please add something other than Spaces";
  }

  // Get todo string from local storage

  const todoString = JSON.stringify(localStorage.getItem(todo));

  // Convert todo string to an array

  const todoArray = JSON.parse(todoString);

  // Check if todo array is null

  if (
    todoArray === null ||
    todoArray === undefined ||
    todoArray.trim() === ""
  ) {
    txtAreaEl.placeholder = "Please add something other than Spaces";
  }

  // push todo to todo array

  todoArray.push(todo);

  // convert todo array to todo string

  const todoArrayStringed = JSON.stringify(todoArray);

  // save todo string in local storage

  localStorage.setItem(todoArrayStringed);

  // Call render todos ui from local storage here

  renderTodosUIFromLocalStorage;
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

  renderTodosUIFromLocalStorage;
};

const deleteAllTodosFromLocalStorage = () => {
  // clear everything from local storage
  // Call render todos ui from local storage here

  renderTodosUIFromLocalStorage;
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
