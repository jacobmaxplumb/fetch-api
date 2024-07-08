async function printTodos() {
    const response = await fetch('http://localhost:3000/todos');
    const data = await response.json();
    console.log(data);
}

async function printSingleTodo(id) {
    const response = await fetch(`http://localhost:3000/todos/${id}`);
    const data = await response.json();
    console.log(data);
}

async function addTodo(text) {
    const data = {text, completed: false};
    const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    const parsedResponse = await response.json();
    console.log(parsedResponse);
}

async function deleteTodo(id) {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json();
    console.log(data);
}

async function updateTodo(todo) {
    const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await response.json();
    console.log(data);
}

// GETTING ALL THE ITEMS
//printTodos();

// GETTING A SINGLE TODO ITEM
//printSingleTodo(2);

// ADDING A TODO ITEM
//addTodo('whatever we want')

// DELETEING A TODO
//deleteTodo(2);

// UPDATING A TODO ITEM EXAMPLE
// const todoItem = {
//     "id": "914c",
//     "text": "this is another todo item 1",
//     "completed": false
//   }
// updateTodo(todoItem);