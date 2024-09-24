const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function(){
    if (input.value.trim() !== "") {

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        // Populate the elements
        li.textContent = input.value;
        deleteButton.textContent = "❌";

        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        });

        // Append the li element variable with the delete button
        li.append(deleteButton);

        // Append the li element variable to the unordered list in your HTML
        list.append(li);

        input.value = "";
        input = focus();
    }
});