async function buscar(endpoint, query) {
    try {
        const response = await fetch(`https://swapi.py4e.com/api/${endpoint}/?search=${query}`)
        if(!response.ok) {
            throw new Error("Error, favor intente mas tarde")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

//Mostrar resultado
async function mostrarResultado() {
    const searchBar = document.getElementById('searchBar')
    const searchResults = document.getElementById('searchResults')

    const realizarBusqueda = async() => {
        const query = searchBar.value.trim()
        if(query.length === 0){
            searchResults.innerHTML = ''
                return
            }
            const data = await buscar(endpoint, query)
            if (data && data.results) {
                searchResults.innerHTML = ''

                data.results.forEach(result => {
                    const resultElement = document.createElement('div');
                    resultElement.textContent= JSON.stringify(result)
                    searchResults.appendChild(resultElement)
                });
            }
            
        }

        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                realizarBusqueda();
            }
        });
        
        searchBar.addEventListener('input', realizarBusqueda)

    }

    const categorias = {
        "films": "Films",
        "people": "People",
        "planets": "Planets",
        "species": "Species",
        "starships": "Starships",
        "vehicles": "Vehicles"
    }

    const categoriesContainer = document.getElementById('categories')
    for (const[endpoint, label] of Object.entries(categorias)) {
        const button = document.createElement('button');
        button.textContent = label;
        button.addEventListener('click', () => mostrarResultado(endpoint))
        categoriesContainer.appendChild(button)
}