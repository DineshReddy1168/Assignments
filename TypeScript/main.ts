interface Todo {
  text: string;
  completed: boolean;
}

const input = document.getElementById('todo-input') as HTMLInputElement;
const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
const list = document.getElementById('todo-list') as HTMLUListElement;

let todos: Todo[] = [];

function renderTodos(): void {
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'done' : '';

    // Task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = todo.text;
    taskSpan.style.flex = '1';
    taskSpan.onclick = () => {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    };

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = (e) => {
      e.stopPropagation();
      const newText = prompt('Edit your task:', todos[index].text);
      if (newText && newText.trim() !== '') {
        todos[index].text = newText.trim();
        renderTodos();
      }
    };

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = (e) => {
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

addBtn.onclick = () => {
  const text = input.value.trim();
  if (text !== '') {
    todos.push({ text, completed: false });
    input.value = '';
    renderTodos();
  }
};
