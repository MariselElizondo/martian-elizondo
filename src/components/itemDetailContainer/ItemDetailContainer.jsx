import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import './ItemDetailContainer.css';

import ItemDetail from '../itemDetail/ItemDetail';

function ItemDetailContainer() {

    const [myPokemon, setMyPokemon] = useState();

    useEffect(() => {
        
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(data => data.json())
        .then(data => data.results)
        .then(data => data[11])
        .then(res => setTimeout(() => {
            setMyPokemon(res)
        }, 2000)
    )
    }, [])

    return (
        <>
            { myPokemon !== undefined ? 
                <ItemDetail title={myPokemon.name} description={myPokemon.url} 
                pictureUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${12}.png`}/> : '' }
  
        </>
    )
}

export default ItemDetailContainer
