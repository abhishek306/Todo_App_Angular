var statusENUMS;
var next_todo_id;
var todoKey;
todoKey = 1;
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.id = [];
        this.title = [];
        this.status = [];
    }
    TodoList.prototype.add = function (list) {
        this.id.push(todoKey);
        this.title.push(list.title);
        this.status.push(list.status);
        this.createTodoElement(todoKey, list);
        todoKey++;
    };
    TodoList.prototype.createTodoElement = function (id, todo_object) {
        var disp = document.getElementById("disp");
        var todo_element = document.createElement("div");
        todo_element.style.height = "35px";
        var label = document.createElement('text');
        label.setAttribute("id", "text" + id);
        label.innerText = todo_object.title;
        var delete_button = document.createElement("button");
        delete_button.innerText = 'X';
        delete_button.style.cssFloat = "right";
        delete_button.setAttribute("id", "label" + id);
        delete_button.setAttribute("class", "breathHorizontal btn btn-danger");
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = todo_object.title;
        checkbox.setAttribute("id", "checkbox" + id);
        var edit_button = document.createElement("button");
        edit_button.innerText = 'EDIT';
        edit_button.setAttribute("id", "edit" + id);
        edit_button.setAttribute("class", "btn btn-warning");
        edit_button.setAttribute("onclick", "editTodo(" + id + ")");
        if (todo_object.status == 0) {
            todo_element.setAttribute("class", "ACTIVE");
            todo_element.setAttribute("id", "" + id);
            checkbox.setAttribute("onchange", "completeTodo(" + id + ")");
            delete_button.setAttribute("onclick", "deleteTodo(" + id + ")");
            todo_element.appendChild(edit_button);
            todo_element.appendChild(checkbox);
            todo_element.appendChild(label);
            todo_element.appendChild(delete_button);
        }
        else if (todo_object.status == 1) {
            todo_element.setAttribute("class", "COMPLETED");
            todo_element.setAttribute("id", "" + id);
            checkbox.checked = true;
            checkbox.setAttribute("onchange", "activeTodo(" + id + ")");
            delete_button.setAttribute("onclick", "deleteTodo(" + id + ")");
            todo_element.appendChild(edit_button);
            todo_element.appendChild(checkbox);
            todo_element.appendChild(label);
            todo_element.appendChild(delete_button);
        }
        else {
            todo_element.appendChild(label);
            todo_element.setAttribute("class", "DELETED");
            todo_element.setAttribute("id", "" + id);
        }
        disp.appendChild(todo_element);
    };
    return TodoList;
}());
var list = new TodoList();
function addTodo(title) {
    console.log(title);
    list.add({
        id: todoKey,
        title: title,
        status: 0
    });
}
