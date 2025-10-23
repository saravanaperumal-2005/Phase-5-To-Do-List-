function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle done state on click
  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.className = 'delete-btn';
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent toggle on delete
    li.remove();
  });

  li.appendChild(delBtn);
  document.getElementById('taskList').appendChild(li);

  input.value = '';
}