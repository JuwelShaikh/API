function loadName(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => showNAme(data))
}

function loadEmail(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => showEmail(data))
}



function showNAme(data){
    const ul = document.getElementById('unorder-list-name')
    for(const user of data){
        console.log(user.address);
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

function showEmail(data){
    const ul = document.getElementById('unorder-list-email')
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li)
    }
}
