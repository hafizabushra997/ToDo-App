var todoList=document.getElementById("todoList")

function addItem(){
    var todoItem=document.getElementById("todoItem")
 //create li Tag   
var li=document.createElement("li")
var liText=document.createTextNode(todoItem.value)
if (todoItem.value==""){
    alert("Please! Enter any input");
    todoList.innerHTML=""

}
else{
li.appendChild(liText)

//create Delete Button
var delBtn=document.createElement("button")
var delText=document.createTextNode(" ")
delBtn.appendChild(delText)
delBtn.setAttribute("class","fa fa-trash")

 delBtn.setAttribute("onclick","deleteItem(this)")

delBtn.appendChild(delText)
//create Edit Button
var editBtn=document.createElement("button")
var editText=document.createTextNode(" ")
editBtn.appendChild(editText)

editBtn.setAttribute("class","fa fa-pencil-square-o")
editBtn.setAttribute("id","edit")

 editBtn.setAttribute("onclick","editItem(this)")


li.appendChild(editBtn)
li.appendChild(delBtn)
todoList.appendChild(li)
todoItem.value=""
console.log(li)
}
}
//<i class="fa fa-trash" aria-hidden="true"></i>
//<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
//<i class="fa fa-trash" aria-hidden="true"></i>
//<i class="fa fa-check-circle" aria-hidden="true"></i>
function deleteItem(e){
    e.parentNode.remove()
}
function clearAll(){
    todoList.innerHTML=""
}
function editItem(e){
    var val=e.parentNode.firstChild.nodeValue
    console.log(val)
    
    var editinput=document.createElement("input")
    var updateBtn=document.createElement("button")
    e.parentNode.replaceChild(editinput,e.parentNode.firstChild );
    editinput.setAttribute("class","editInput")

    editinput.value=val
    //var editVal=prompt("Enter edit value",val) 
    e.parentNode.replaceChild(updateBtn,e)
 console.log(e)
    updateBtn.setAttribute("class","fa fa-check-circle")
    updateBtn.onclick= function(){
        val=editinput.value
        editinput.replaceWith(editinput.value)
        updateBtn.parentNode.replaceChild(e,updateBtn)
        editinput.replaceWith(e.parentNode.firstChild)
    
    
    }
    
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
