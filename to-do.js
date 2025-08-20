function addTask() {
  const input = document.querySelector("#taskInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Enter a task first.");
    return;
  }
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = task;
  span.onclick = () => {
    li.classList.toggle("completed");
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.style.backgroundColor = "red";
  delBtn.style.color = "white";
  delBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(delBtn);

  const taskList = document.querySelector("#taskList");
  taskList.appendChild(li);

  input.value = "";
}

function clearTasks() {
  const taskList = document.getElementById("taskList");
  while (taskList.children.length > 0) {
    taskList.removeChild(taskList.firstChild);
  }
}