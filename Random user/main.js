const loadData = user =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data) )
}


const displayUser = us => {
    // name
    const nameTag = document.getElementById('name')
    const userName = us.results[0].name.title +' '+us.results[0].name.first + ' ' + us.results[0].name.last;
    nameTag.innerText = userName;

    // gender
    const genderTag = document.getElementById('gender')
    const genderName = us.results[0].gender;
    genderTag.innerText = genderName;

    // location
    const locationTag = document.getElementById('loaction')
    const locationName = us.results[0].location.city; 
    locationTag.innerText = locationName;

    // street
    const streetTag = document.getElementById('street')
    const streetName = us.results[0].location.street.number + ' ' +us.results[0].location.street.name;
    streetTag.innerText = streetName; 

    // profilePhoto
    const photoTag = document.getElementById('profile');
    const photo = us.results[0].picture.medium;
    photoTag.innerHTML = photo; 
    console.log(us.results[0].picture.medium);
}


loadData();