
const fibonacciA = (numero) => {
    let numeros = [0, 1]
    for(let i = 2; i <= numero; i++) {
        let suma = numeros[i - 1] + numeros[i - 2]
        if(suma > 1000){
            break
        }
        numeros.push(suma);
    }
    console.log(numeros)
    return numeros
}
const resultadoA = fibonacciA(1000)

const fibonacciB = resultadoA.filter(numero => numero % 2 == 0 )
console.log(fibonacciB)

const fibonacciC = resultadoA.filter(numero => numero % 2 )
console.log(fibonacciC)

let pokemones = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"]

const POKEMONES = pokemones.map((pokemon) => {
    return pokemon.toUpperCase();
})
console.log(POKEMONES);

let pokemones2 =  [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
   ]

   const pokemonesFuego = pokemones2.filter(pokemon => pokemon.tipo === 'Fuego')
   console.log(pokemonesFuego) 