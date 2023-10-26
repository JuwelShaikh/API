function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => todoDisplay(data))
}


function todoDisplay(lists){
    const todoContainer = document.getElementById('todo-container')
    for(const list of lists ){
        const div = document.createElement('div')
        div.classList.add('post')
        
        div.innerHTML = `
            <h2>User ID: ${list.userId}</h2>
            <h4>ID: ${list.id}</h4>
            <p>Title: ${list.title}</p>
            <p>Is complete: ${list.completed == true ? 'Yes' : 'Not yet'}
        `
        todoContainer.appendChild(div);
    }
}



loadData();