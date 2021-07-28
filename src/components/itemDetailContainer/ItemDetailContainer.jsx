import {useState, useEffect} from 'react'
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { getMock } from '../../services/getMock';
import './ItemDetailContainer.css';

function ItemDetailContainer() {

    const [item, setItem] = useState({})
    const {itemId} = useParams()

    useEffect(() => {

        const getItemMock = new Promise ((res, rej) => {
            setTimeout(() => {
                res(getMock())
            }, 2000);
        });

        getItemMock
        .then(res => res.filter( i => i.id === itemId ? setItem(i) :''))
        .catch(err => console.log(err))
    }, [itemId])

    console.log(itemId)

    return (
        <>
            <ItemDetail id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />
        </>
    )
}

export default ItemDetailContainer
