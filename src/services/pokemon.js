const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const maxItems = 10
const initialOffset = 0

export async function getPokemonList(url = `${baseUrl}/?limit=${maxItems}&offset=${initialOffset}`) {
    const response = await fetch(url)
    return await response.json()
}

export async function getPokemonDetails(id) {
    const response = await fetch(`${baseUrl}/${id}`)
    return await response.json()
}