function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}

function displayPost(posts){
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        console.log(post);
        const div = document.createElement('div')
        div.innerHTML = `
            <h4>User id: ${post.id}</h4>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
        `;
        postContainer.appendChild(div)
    }
}

loadPosts();