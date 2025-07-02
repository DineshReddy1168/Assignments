(function () {
    var input = document.getElementById('todo-input');
    var addBtn = document.getElementById('add-btn');
    var list = document.getElementById('todo-list');
    var todos = [];
    function renderTodos() {
        list.innerHTML = '';
        todos.forEach(function (todo, index) {
            var li = document.createElement('li');
            li.className = todo.completed ? 'done' : '';
            // Task text
            var taskSpan = document.createElement('span');
            taskSpan.textContent = todo.text;
            taskSpan.style.flex = '1';
            taskSpan.onclick = function () {
                todos[index].completed = !todos[index].completed;
                renderTodos();
            };
            // Edit button
            var editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.onclick = function (e) {
                e.stopPropagation();
                var newText = prompt('Edit your task:', todos[index].text);
                if (newText && newText.trim() !== '') {
                    todos[index].text = newText.trim();
                    renderTodos();
                }
            };
            // Delete button
            var deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = function (e) {
                e.stopPropagation();
                todos.splice(index, 1);
                renderTodos();
            };
            li.appendChild(taskSpan);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            list.appendChild(li);
        });
    }
    addBtn.onclick = function () {
        var text = input.value.trim();
        if (text !== '') {
            todos.push({ text: text, completed: false });
            input.value = '';
            renderTodos();
        }
    };
})();
