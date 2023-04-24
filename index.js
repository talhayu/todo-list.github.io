let taskinput=document.getElementById("user");
let add=document.getElementById("add");
let delet=document.getElementById("delete");
let userList=document.getElementById("userList");
let demo=document.getElementById("demo");
let space=document.getElementById("space")
let task;
let list;



let todo=[]

add.addEventListener("click", ()=>{


// task=taskinput.value; 
task = taskinput.value.toLowerCase(); 

    if(task!==""){
          list=document.createElement("li");
        list.innerText=task
        userList.appendChild(list)
        todo.push(task)
        taskinput.value=""
        console.log(todo)


        demo.innerHTML="want to search the todo items click here"
        demo.classList.add('active')
        let button=document.createElement("button")
        button.innerHTML="search"
        button.classList.add('button')
        demo.appendChild(button)
        button.addEventListener("click", ()=>{
          if(!space.querySelector("input")){
            let createInput=document.createElement("input");
            createInput.placeholder="search here"
            createInput.style.margin="1rem 0rem 0rem 1rem"
            createInput.type="text"
            space.appendChild(createInput )
            demo.style.display="none"
            button.style.display="none"
            let icon=document.createElement("icon")
            icon.className="fa fa-search"
            icon.classList.add("icon")
            space.appendChild(icon)
            icon.addEventListener("click", ()=>{
                let searchvalue=createInput.value.toLowerCase();
                let listItem=userList.getElementsByTagName("li")
                for (let i = 0; i < listItem.length; i++) {
                  if (listItem[i].innerText === searchvalue) {
                    listItem[i].style.display = "block";
                  } else {
                    listItem[i].style.display = "none";
                  }
                }
              
                if (!todo.includes(searchvalue)) {
                  let invalidItem = document.createElement("li");
                  invalidItem.style.listStyle="none"
                  invalidItem.style.color="red"
                  invalidItem.innerText = "Invalid item";
                  userList.appendChild(invalidItem);
                    
                }
              });
          
    
          }
        })
    }
    else{
        alert("enter value")
    
    }
    
  
})

delet.addEventListener("click", () => {
  let listItems = userList.getElementsByTagName("li");
  for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];
    if (!listItem.querySelector("icon")) {
      let icon = document.createElement("icon");
      icon.className = "fa-sharp fa-regular fa-circle-xmark";
      icon.classList.add("newicon")
      listItem.appendChild(icon);
      icon.addEventListener("click", () => {
        let removedItem = listItem.innerText;
        let index = todo.indexOf(removedItem.toLowerCase());
        if (index !== -1) {
          todo.splice(index, 1);
          console.log(todo);
        }
        listItem.remove();
      });
    }
  }
});
