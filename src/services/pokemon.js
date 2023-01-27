import { baseUrl, maxItems } from "../variables"

export async function getPokemonList(url = `${baseUrl}/pokemon/?limit=${maxItems}&offset=0`) {
    const response = await fetch(url)
    return await response.json()
}

export async function getPokemonDetailsByUrl(url) {
    const response = await fetch(url)
    return await response.json()
}

export async function getPokemonDetailsById(id) {
    const response = await fetch(`${baseUrl}/pokemon/${id}`)
    return await response.json()
}
