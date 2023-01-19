const add = document.querySelector("#add");
const input = document.querySelector("#input");
const tasks = document.querySelector("#tasks");
const clear = document.getElementById('clear')

add.addEventListener("click",  () => {
  if (input.value.trim() != 0) {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(input.value);
        
    localStorage.setItem("localItem", JSON.stringify(taskList));
  }
  input.value = ""
  showList();
});

function showList() {
  let result = "";
  let taskListShow = document.querySelector("#tasks");

  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  taskList.forEach((data, index) => {
    result += `
    <div class="task">
    <span id="taskname">${data}</span>
    <div class="btns">
      <button class="edit" onClick="editItem(${index})">
        <i class="fa-sharp fa-solid fa-pen"></i>
      </button>
      <button class="delete" onClick="deleteItem(${index})">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </div>
      `;
  });
  taskListShow.innerHTML = result;

}
tasks.style.disply = "none"
showList();

function deleteItem(index) {
  taskList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  showList();
}

// function editItem() {
  

// }



clear.addEventListener('click',()=>{
  localStorage.clear();
  showList();
})
