import './ItemDetailContainer.css';

//Hooks
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

//Componentes
import ItemDetail from '../itemDetail/ItemDetail';
import { getFirestore } from '../../services/firebaseService';
import { getMock } from '../../services/getMock';

function ItemDetailContainer() {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {

        //.where('category', '==', categoryId)
        
        const dbQuery = getFirestore()
        dbQuery.collection('Products').doc(itemId).get()
        .then( res => setItem({ id: res.id, ...res.data() }));
        console.log(item);

        
        /* const getItemMock = new Promise ((res, rej) => {
            setTimeout(() => {
                
                res(getMock())
                rej("Error");
            }, 2000);
        });

        getItemMock
        .then(res => res.filter( i => i.id === itemId ? setItem(i) :''))
        .catch(err => console.log(err)) */
        setLoading(true)
    }, [itemId])

    return (
        <>
            { loading ? <ItemDetail item={item} id={item.id} title={item.Title} description={item.Description} price={item.Price} picture_url={item.Picture_Url} /> 
            : (<div className="my-spinner spinner-border text-info" role="status"></div>)}
        </>
    )
}

export default ItemDetailContainer
