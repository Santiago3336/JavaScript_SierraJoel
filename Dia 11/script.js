async function fetchPokedex(){
    const pokeID= document.getElementById('').value
    const url = `https://pokeapi.co/api/v2/${pokeID}`

    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Error response wasn't ok")
        }

        const data = await response.json
        Display
    }

}