const loadData = user =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data) )
}


const displayUser = us => {
    const nameTag = document.getElementById('name')
    const userName = us.results[0].name.title +' '+us.results[0].name.first + ' ' + us.results[0].name.last;
    nameTag.innerText = userName;

    const genderTag = document.getElementById('gender')
    const genderName = us.results[0].gender;
    genderTag.innerText = genderName;

    const locationTag = document.getElementById('loaction')
    const locationName = us.results[0].location.city; 
    locationTag.innerText = locationName;
    console.log(us.results[0].location.city);
}


loadData();