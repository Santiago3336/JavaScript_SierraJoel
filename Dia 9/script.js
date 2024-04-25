async function fetchStarWars(){
    const starID = document.getElementById('caracterID').value;
    const URL = `https://swapi.py4e.com/api/people/${starID}/`;

    try {
        const response = await fetch(URL)
        if(!response.ok){
            throw new Error("Error response wasn't ok")
        }

        const data = await response.json();
        DisplayInfo(data);
        await DisplayInfoExtra(data);
        await DisplayHomeworldInfo(data);
        await DisplayFilmsInfo(data);
    } catch(error){
        console.error('Error ', error.message);
    }
}

function DisplayInfo(data){
    const generalInfo = document.getElementById("GeneralInf");
    generalInfo.innerHTML = `
    <p>Nombre: ${data.name}</p>
    <p>Altura: ${data.height}</p>
    <p>Masa: ${data.mass}</p>
    <p>Color de Pelo: ${data.hair_color}</p>
    <p>Color de Piel: ${data.skin_color}</p>
    <p>Color de Ojos: ${data.eye_color}</p>
    <p>Fecha de Nacimiento: ${data.birth_year}</p>
    <p>Genero: ${data.gender}</p>
    `;
}

async function DisplayHomeworldInfo(data){
    const homeworldInfo = document.getElementById("HomeworldInf");

    try {
        const response = await fetch(data.homeworld);
        if(!response.ok){
            throw new Error("Network response wasn't ok");
        }

        const planetData = await response.json();
        homeworldInfo.innerHTML = `
        <p>Nombre: ${planetData.name}</p>
        <p>Clima: ${planetData.climate}</p>
        <p>Poblacion: ${planetData.population}</p>
        `
    } catch (error){
        homeworldInfo.innerHTML = `<p>Error: ${error.message}</p>`
    }
}

async function DisplayFilmsInfo(data){
    const filmInfo = document.getElementById("FilmsInf");

    try{
        const filmsList = await Promise.all(data.films.map(async function(URL){
            const response = await fetch(URL);
            if (!response.ok){
                throw new Error("Network response wasn't ok")
            }
            const filmData = await response.json();
            return filmData.title;
        }));
        
        let filmsHTML = "";

        filmsList.forEach(film => {
            filmsHTML += `<p>${film}</p>`            
        });

        filmInfo.innerHTML = `<p><b>Peliculas: </b></p>${filmsHTML}`
    } catch(error){
        filmInfo.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

async function DisplayInfoExtra(data){
    const extraInfo = document.getElementById('ExtraInf');
    extraInfo.innerHTML = `
    <p>Creado: ${data.created}</p>
    <p>Editado: ${data.edited}</p>
    <p>Url: ${data.url}</p>
    `
}