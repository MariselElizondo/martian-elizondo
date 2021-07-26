import {useState, useEffect} from 'react'
import ItemDetail from '../itemDetail/ItemDetail';

import './ItemDetailContainer.css';

function ItemDetailContainer() {

    const [item, setItem] = useState({})

    useEffect(() => {

        const items = [
            {id:'ac1562', title:'Aceite de girasol', description:'Cocinero 1.5 l.', price:'$216,35', pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/192351-800-auto?width=800&height=auto&aspect=true'},
            {id:'ac1682', title:'Harina de trigo', description:'Morixe 000 1 kg.', price:'$49,80', pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/175949-600-auto?width=600&height=auto&aspect=true'},
            {id:'ac1564', title:'Arroz largo fino 00000', description:'Marolio bolsa 500 g.', price:'$59,00', pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/171031-600-auto?width=600&height=auto&aspect=true'},
            {id:'ac1781', title:'Porotos alubia', description:'La Abadía bolsa 400 g.', price:'$125,00', pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/197197-800-auto?width=800&height=auto&aspect=true'}
        ]

        const getItemMock = new Promise ((res, rej) => {
            setTimeout(() => {
                res(items[0])
            }, 2000);
        });

        getItemMock
        .then(res => setItem(res))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <ItemDetail id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />
        </>
    )
}

export default ItemDetailContainer
