const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

// Populate the elements
li.textContent = input.value;
deleteButton.textContent = "❌";

// Append the li element variable with the delete button
li.append(deleteButton);

// Append the li element variable to the unordered list in your HTML
list.append(li);
