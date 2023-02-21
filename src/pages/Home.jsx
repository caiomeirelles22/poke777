import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'

const Home = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    }
    )

    const getPokemons = () => {
       let endponts = []
       for (let i = 1; i<=777; i++){
        endponts.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
       }
       let resultado = axios.all(endponts.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    }

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
    return (
        <div>
            <NavBar />
            <Container maxWidth='false'>
                <Grid container>
                    {pokemons.map((pokemon, key) =>(
                        <Grid item xs={3}  key ={key} >
                            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
                            </Grid>
                    ))}
                    

                </Grid>
            </Container>
        </div>
    )
}

export default Home
