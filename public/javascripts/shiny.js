function trocarShiny(id){

    var img = document.getElementById(id)

    if (img.src == `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`) {
        img.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
    } else if(img.src == `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`) {
        img.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        // img.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
    }
    //  else {
    //     console.log("ola mundo 3")
    // }

}