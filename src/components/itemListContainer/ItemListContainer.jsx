import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

import './ItemListContainer.css';

import ItemList from '../itemList/ItemList';
import { getMock } from '../../services/getMock';


function ItemListContainer({greeting}) {

    const [itemList, setItemList] = useState([])

    const {categoryId} = useParams() //Automaticamente (por ser parámetro dinámico) lo toma de la ruta. String

    useEffect(() => {

        const getProducts = new Promise ((res, rej) => {
            setTimeout(() => {
                res(getMock())
            }, 0);
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

            <h5>{greeting}</h5>
            <ItemList list={itemList}/>
        </div>
    )
}

export default ItemListContainer
