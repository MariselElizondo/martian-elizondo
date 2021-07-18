import ItemCount from '../itemCount/ItemCount';
import './ItemListContainer.css';

function ItemListContainer({greeting}) {

    const onAdd= () => {
        alert('toco on add')
    }

    return (
        <>
            <h5>{greeting}</h5>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer
