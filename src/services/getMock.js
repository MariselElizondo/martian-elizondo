const products = [{
    name: 'algo',
    price: 123
}]

const task = new Promise( res => {
    res(products)
}, 2000)

export const getMock = () => task