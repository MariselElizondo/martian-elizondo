import './ItemDetailContainer.css';

//Hooks
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

//Componentes
import ItemDetail from '../itemDetail/ItemDetail';

import { getMock } from '../../services/getMock';

function ItemDetailContainer() {

    const [item, setItem] = useState({})
    const {itemId} = useParams()

    useEffect(() => {

        const getItemMock = new Promise ((res, rej) => {
            setTimeout(() => {
                res(getMock())
            }, 0);
        });

        getItemMock
        .then(res => res.filter( i => i.id === itemId ? setItem(i) :''))
        .catch(err => console.log(err))
    }, [itemId])

    return (
        <>
            <ItemDetail id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />
        </>
    )
}

export default ItemDetailContainer
