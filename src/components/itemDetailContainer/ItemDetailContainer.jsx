import './ItemDetailContainer.css';

//Hooks
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

//Componentes
import ItemDetail from '../itemDetail/ItemDetail';

import { getMock } from '../../services/getMock';

function ItemDetailContainer() {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {

        const getItemMock = new Promise ((res, rej) => {
            setTimeout(() => {
                setLoading(true)
                res(getMock())
                rej("Error");
            }, 2000);
        });

        getItemMock
        .then(res => res.filter( i => i.id === itemId ? setItem(i) :''))
        .catch(err => console.log(err))
    }, [itemId])

    return (
        <>
            { loading ? <ItemDetail id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} /> : (<div className="my-spinner spinner-border text-info" role="status"></div>)}
        </>
    )
}

export default ItemDetailContainer
