const products = [
    {
        id:'aa1502', 
        category:'almacen',
        title:"Mayonesa Hellmann's doy pack", 
        description:'475 cc.',
        price:129.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/200583-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'aa1562', 
        category:'almacen',
        title:'Aceite de girasol', 
        description:'Cocinero 1.5 l.',
        price:216.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/192351-800-auto?width=800&height=auto&aspect=true'
    },
    {
        id:'aa1682', 
        category:'almacen',
        title:'Harina de trigo', 
        description:'Morixe 000 1 kg.', 
        price:50.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/175949-600-auto?width=600&height=auto&aspect=true'
    },          
    {
        id:'aa1564', 
        category:'almacen',
        title:'Arroz largo fino 00000', 
        description:'Marolio bolsa 500 g.', 
        price:59.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/171031-600-auto?width=600&height=auto&aspect=true'
    },
    {
        id:'aa1781', 
        category:'almacen',
        title:'Porotos alubia', 
        description:'La Abadía bolsa 400 g.', 
        price:125.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/197197-800-auto?width=800&height=auto&aspect=true'
    },
    {
        id:'ap2771', 
        category:'panaderia',
        title:'Prepizza de tomate', 
        description:'250 g. ($266,00 x 1 K.)', 
        price:67.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/181547-800-auto?width=800&height=auto&aspect=true'
    },
    {
        id:'ap2171', 
        category:'panaderia',
        title:'Medialunas con manteca', 
        description:'12 unidades', 
        price:249.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/175073-800-auto?width=800&height=auto&aspect=true'
    },
    {
        id:'ap2251', 
        category:'panaderia',
        title:'Medialunas de grasa', 
        description:'12 unidades', 
        price:249.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/175080-800-auto?width=800&height=auto&aspect=true'
    },
    {
        id:'ap2981', 
        category:'panaderia',
        title:'Pan para pebetes', 
        description:'390 g.', 
        price:119.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/201764-800-auto?width=800&height=auto&aspect=true'
    },
    
    {
        id:'av2051', 
        category:'verduleria',
        title:'Tomate', 
        description:'x kg.', 
        price:249.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/184380-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'av2551', 
        category:'verduleria',
        title:'Cebolla morada', 
        description:'x kg.', 
        price:109.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/201747-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'av2145', 
        category:'verduleria',
        title:'Repollo blanco', 
        description:'x kg.', 
        price:90.0, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/201734-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'av2019', 
        category:'verduleria',
        title:'Zapallo anco organico', 
        description:'x kg.', 
        price:109.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/184512-1200-auto?width=1200&height=auto&aspect=true'
    },

    {
        id:'ac2116', 
        category:'carniceria',
        title:'Pechito de cerdo', 
        description:'x kg.', 
        price:440.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/172997-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'ac2786', 
        category:'carniceria',
        title:'Pollo entero', 
        description:'congelado x kg.', 
        price:162.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/181409-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'ac2189', 
        category:'carniceria',
        title:'Milanesas carne vacuna', 
        description:'congeladas x kg.', 
        price:680.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/204878-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'ac2486', 
        category:'carniceria',
        title:'Tortuguita novillo', 
        description:'x kg.', 
        price:499.00, 
        picture_url:'https://carrefourar.vtexassets.com/arquivos/ids/196459-1200-auto?width=1200&height=auto&aspect=true'
    }
]

const task = new Promise( res => {
    res(products)
}, 2000)

export const getMock = () => task