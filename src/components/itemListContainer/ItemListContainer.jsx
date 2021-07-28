import './ItemListContainer.css';

//Hooks
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

//Componentes
import ItemList from '../itemList/ItemList';

import { getMock } from '../../services/getMock';

function ItemListContainer() {

    const [itemList, setItemList] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams() //Automaticamente (por ser parámetro dinámico) lo toma de la ruta. String

    useEffect(() => {

        setLoading(false)
        
        const getProducts = new Promise ((res, rej) => {
            setTimeout(() => {
                setLoading(true)
                res(getMock())
                rej("Error");
            }, 2000);
        });

        const asyncGetProducts = () => {
            return getProducts
        }  

        asyncGetProducts()
        .then(res => categoryId === undefined ? setItemList(res) : setItemList(res.filter( i => i.cat===categoryId)))
        .catch(err => console.log(err))

    }, [categoryId])

    return (
        <div id="content" >
            { loading ? <ItemList list={itemList}/> : (<div className="my-spinner spinner-border text-info" role="status"></div>)}
        </div>
    )
}

export default ItemListContainer
