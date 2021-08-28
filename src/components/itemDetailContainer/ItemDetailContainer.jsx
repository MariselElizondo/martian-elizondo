import './ItemDetailContainer.css';

//Hooks
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

//Componentes
import ItemDetail from '../itemDetail/ItemDetail';
import { getFirestore } from '../../services/firebaseService';
import Path from '../path/Path';
function ItemDetailContainer() {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)

    const {itemId, categoryId} = useParams()

    useEffect(() => {

        const dbQuery = getFirestore()
        dbQuery.collection('Products').doc(itemId).get()
        .then( res => setItem({ id: res.id, ...res.data() }))
        .then( res =>  setLoading(true))
        .catch(err => console.log(err))
      
    }, [itemId])

    return (
        <div className='content'>
            <Path category={categoryId} title={item.title} id={item.id}/>
            { loading ? <ItemDetail item={item} id={item.id} title={item.title} description={item.description} price={item.price} picture_url={item.picture_url} /> 
            : (<div className="my-spinner spinner-border text-info" role="status"></div>)}
        </div>
    )
}

export default ItemDetailContainer
