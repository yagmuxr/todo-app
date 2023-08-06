const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // Add or remove 'checked' class on LI click
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // Remove the parent LI when the span is clicked
    }
  },
  false
);
