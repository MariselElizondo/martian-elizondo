import './ItemListContainer.css';

//Hooks
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

//Componentes
import ItemList from '../itemList/ItemList';
import { getFirestore } from '../../services/firebaseService';
import { getMock } from '../../services/getMock';

function ItemListContainer() {

    const [itemList, setItemList] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams() //Automaticamente (por ser parámetro dinámico) lo toma de la ruta. String

    useEffect(() => {
        //.where('category', '==', categoryId)
        setLoading(false)
        const dbQuery = getFirestore()
        dbQuery.collection('Products').get()
        .then( res => setItemList(res.docs.map( product => 
            ({ ...product.data(), id: product.id })
        )));
        console.log(itemList)
        
        /* const getProducts = new Promise ((res, rej) => {
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
        .catch(err => console.log(err)) */

    }, [categoryId])

    return (
        <div id="content" >
            { loading ? <ItemList list={itemList}/> : (<div className="my-spinner spinner-border text-info" role="status"></div>)}
        </div>
    )
}

export default ItemListContainer
