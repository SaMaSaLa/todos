/*
// // append ol
// divEl.appendChild(ol);

// let j = 1;
// let todos = [];

// // get the stringed version
// let pST = localStorage.getItem("todos");

// // parsed version
// let pPT = JSON.parse(pST);

// // check for null
// if (pPT === null) {
//   pPT = [];
// }

// for (let i = 0; i < pPT.length; i++) {
//   // clear everything in the div
//   divEl.innerText = "";

//   // adding each li
//   let lit = document.createElement("li");
//   lit.textContent = pPT[i];
//   ol.appendChild(lit);

//   // adding the delete button
//   let deleteButton2 = document.createElement("button");
//   deleteButton2.textContent = "Delete";
//   lit.appendChild(deleteButton2);
// }

// // if you click on the add button
// addEl.addEventListener("click", () => {
//   for (let i = j; i <= j; i++) {
//     // getting element with id added-todo
//     let todoEl = document.getElementById("added-todo");

//     // adding todo and pushing into array
//     let todo = `${i}: ${todoEl.value}`;
//     todos.push(todo);

//     // creating li
//     let li = document.createElement("li");
//     li.textContent = todoEl.value;
//     ol.appendChild(li);

//     // create delete button
//     let deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     li.appendChild(deleteButton);

//     // set item into local storage
//     const todosStringed = JSON.stringify(todos);
//     localStorage.setItem("todos", todosStringed);
//   }
//   j++;
// });

// deleteAllEl.addEventListener("click", function () {
//   divEl.innerText = "";
//   localStorage.clear();
// });
*/
/*
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
*/






