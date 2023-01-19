const add = document.querySelector('#add')
const input = document.querySelector('#input')

document.querySelector('#tasks').innerHTML = JSON.parse(localStorage.getItem("todos"))

add.addEventListener('click',() =>{
  if(input.value.trim()){
      document.querySelector('#tasks').innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector('#newtask input').value}
              </span>
              
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </div>
      `;
      localStorage.setItem("todos",JSON.stringify(document.querySelector('#tasks').innerHTML))
      let current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i < current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
              localStorage.setItem("todos",JSON.stringify(document.querySelector('#tasks').innerHTML))
          }
      }
  }
  input.value = ""
})

