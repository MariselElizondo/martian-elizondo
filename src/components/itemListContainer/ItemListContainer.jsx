import {useState} from 'react'
import './ItemListContainer.css';

function ItemListContainer({greeting}) {

    const [count, setCount] = useState(0)
    const [date, setDate] = useState(null)

    const handleCount = () => {
        setCount(count+1)
        setDate(Date())
    }

    return (
        <>
            <h5>{greeting}</h5>
            <h6>{count}</h6>
            <h6>{date}</h6>
            <button onClick={handleCount}>Subir contador</button>

        </>
    )
}

export default ItemListContainer
