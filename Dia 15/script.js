const userImageDIV = document.getElementById('userImage')
const userInfoDIV = document.getElementById('userInfo')

function fetchRandomPerson(){
    fetch('https://randomuser.me/api/').then(response => response.json()).then(data =>{
        const user = data.results[0]
        const userImage = user.picture.large
        const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`
        const location = `${user.location.city}, ${user.location.strafe}, ${user.location.country}`
        const email = user.email
        const phone = user.phone

        userImageDIV.innerHTML = `<img src="${userImage}">`

        userInfoDIV.innerHTML = `<p>Name: ${fullName}
        <p>Location: ${location}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        `
    })
    .catch(error => {
        console.error('Error al cargar los datos:', error);
    })
}

fetchRandomPerson()