
function addNewTodo(){
    var input = document.getElementById("new_todo_input");
    addTodo(input.value);
    input.value = null;
    var todoForm = document.getElementById('newTodoForm');
    todoForm.style.display='none';
};

function cancelFunc(){
    var input = document.getElementById("new_todo_input");
    input.value = null;
    var todoForm = document.getElementById('newTodoForm');
   todoForm.style.display='none';
}
function activeTodo(id){
    var todo = document.getElementById(id);
    todo.setAttribute("class", "ACTIVE");
    var check = document.getElementById("checkbox"+id);
    check.setAttribute("onchange", "completeTodo("+id+")");

}

function deleteTodo(id){
    var todo = document.getElementById(id);
    var check = document.getElementById("checkbox"+id);
    todo.removeChild(check);
    var label = document.getElementById("label"+id);
    todo.removeChild(label);
    var edit = document.getElementById("edit"+id);
    todo.removeChild(edit);
    todo.setAttribute("class", "DELETED");


}

function completeTodo(id) {
    var todo = document.getElementById(id);
    todo.setAttribute("class", "COMPLETED");
    var check = document.getElementById("checkbox"+id);
    check.setAttribute("onchange", "activeTodo("+id+")");
}

function editTodo(id){
    var checkbox = document.getElementById("checkbox"+id);
    var edit = document.getElementById("edit"+id);
    var todo = document.getElementById(id);
    var text = document.getElementById("text"+id);
    var title = text.innerText;
    var delete_button = document.getElementById("label"+id);

    var textDiv = document.createElement('div');
    textDiv.style.width='250px';
    var textBox = document.createElement('input');
    textBox.type = "text";
    textBox.setAttribute("class", "form-control input pass");
    textBox.style.width="250px";
    textBox.value=title;

    var edit_button = document.createElement('button');
    edit_button.setAttribute('class','btn btn-primary');
    edit_button.innerText="SAVE";
    edit_button.style.float='right';

    edit_button.onclick=function(id){
    text.innerText=textBox.value;
    todo.removeChild(edit_button);
    todo.removeChild(textDiv);
    todo.appendChild(edit);
    todo.appendChild(checkbox);
    todo.appendChild(text);
    todo.appendChild(delete_button);
    }

    textDiv.appendChild(textBox);
    todo.appendChild(edit_button);

   todo.removeChild(text);
   todo.removeChild(edit);
   todo.removeChild(checkbox);
   todo.removeChild(delete_button);
   todo.appendChild(textDiv);
}