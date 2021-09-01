import './ItemListContainer.css';

//Hooks
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

//Componentes
import ItemList from '../itemList/ItemList';
import Path from '../path/Path';

//Firebase
import { getFirestore } from '../../services/firebaseService';

function ItemListContainer() {

    const [itemList, setItemList] = useState([])
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    
    const {categoryId} = useParams()
    useEffect(() => {
        setTitle('')

        const dbQuery = getFirestore()
        
        categoryId === undefined ? (
            dbQuery.collection('Products').get()
            .then( res => 
                setItemList(res.docs.map( product => 
                    ({ ...product.data(), id: product.id }) 
                ))
            )
            .catch(err => console.log(err)) 
        ) : ( dbQuery.collection('Products').where('category', '==', categoryId).get()
            .then( res => 
                setItemList(res.docs.map( product => 
                ({ ...product.data(), id: product.id })))
            )
            .catch(err => console.log(err)) 
        )
        setLoading(true)
        //eslint-disable-next-line
    }, [categoryId])

    return (
        <>
            <div className="content" >
                <Path category={categoryId} title={title}/>
                { loading ? <ItemList list={itemList}/> : (<div className="my-spinner spinner-border text-info" role="status"></div>)}
            </div>
        </>
    )
}

export default ItemListContainer
