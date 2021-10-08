function getPokemonUrl(id) { return `https://pokeapi.co/api/v2/pokemon/${id}` }
const fetchPokemon = () => {

    

    const pokemonPromises = []

    // fetch 151 vezes, 1 para cada pokemon
    for (let i = 1; i <= 151; i++) {
        pokemonPromises.push(fetch(getPokemonUrl(i))
            .then(
                response => {
                    return response.json()
                }
            )
           
        )

    }

    Promise.all(pokemonPromises)
        .then(pokemons => {
            // console.log(pokemons)
            const listPokemons = pokemons.reduce((accumulator, pokemon) => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)

                accumulator += 
                `<li class="card ${types[0]}">
                <img class="card-image " id="${pokemon.id}" onclick='trocarShiny(${pokemon.id})' alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"  />
                    <h2 class="card-title">${pokemon.id}: ${pokemon.name}</h2>
                    <p class="card-Subtitle"> ${types.join(' | ')} </p>
                </li>`
                return accumulator
            }, '')

            const ul = document.querySelector('[data-js="pokedex"]')

            ul.innerHTML = listPokemons
            console.log(ul)
            // console.log(listPokemons)
        })

    // fetch(getPokemonUrl())
    //     .then(
    //         response => {
    //             return response.json()
    //         }
    //     )
    //     .then(
    //         pokemon => {
    //             return console.log(pokemon)
    //         }
    //     )

}

fetchPokemon()