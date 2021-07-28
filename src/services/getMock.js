const products = [
    {
        id:'aa1502', 
        cat:'almacen',
        title:"Mayonesa Hellmann's doy pack", 
        description:' 475 cc.',
        price:129.30, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/200583-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'aa1562', 
        cat:'almacen',
        title:'Aceite de girasol', 
        description:'Cocinero 1.5 l.',
        price:216.35, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/192351-800-auto?width=800&height=auto&aspect=true'
    },
    {
        id:'aa1682', 
        cat:'almacen',
        title:'Harina de trigo', 
        description:'Morixe 000 1 kg.', 
        price:49.80, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/175949-600-auto?width=600&height=auto&aspect=true'
    },          
    {
        id:'aa1564', 
        cat:'almacen',
        title:'Arroz largo fino 00000', 
        description:'Marolio bolsa 500 g.', 
        price:59.00, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/171031-600-auto?width=600&height=auto&aspect=true'
    },
    {
        id:'aa1781', 
        cat:'almacen',
        title:'Porotos alubia', 
        description:'La Abadía bolsa 400 g.', 
        price:125.00, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/197197-800-auto?width=800&height=auto&aspect=true'
    },
    {
        id:'ap2771', 
        cat:'panaderia',
        title:'Prepizza de tomate', 
        description:'250 g. ($266,00 x 1 K.)', 
        price:66.50, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/181547-800-auto?width=800&height=auto&aspect=true'
    },
    {
        id:'ap2171', 
        cat:'panaderia',
        title:'Medialunas con manteca', 
        description:'12 unidades', 
        price:249.00, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/175073-800-auto?width=800&height=auto&aspect=true'
    },
    {
        id:'ap2251', 
        cat:'panaderia',
        title:'Medialunas de grasa', 
        description:'12 unidades', 
        price:249.00, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/175080-800-auto?width=800&height=auto&aspect=true'
    },
    {
        id:'ap2981', 
        cat:'panaderia',
        title:'Pan para pebetes', 
        description:'390 g.', 
        price:119.00, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/201764-800-auto?width=800&height=auto&aspect=true'
    },
    
    {
        id:'av2051', 
        cat:'verduleria',
        title:'Tomate', 
        description:'x kg.', 
        price:249.00, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/184380-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'av2551', 
        cat:'verduleria',
        title:'Cebolla morada', 
        description:'x kg.', 
        price:109.00, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/201747-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'av2145', 
        cat:'verduleria',
        title:'Repollo blanco', 
        description:'x kg.', 
        price:89.90, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/201734-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'av2019', 
        cat:'verduleria',
        title:'Zapallo anco organico', 
        description:'x kg.', 
        price:109.00, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/184512-1200-auto?width=1200&height=auto&aspect=true'
    },

    {
        id:'ac2116', 
        cat:'carniceria',
        title:'Pechito de cerdo', 
        description:'x kg.', 
        price:439.90, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/172997-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'ac2786', 
        cat:'carniceria',
        title:'Pollo entero congelado', 
        description:'x kg.', 
        price:162.50, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/181409-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'ac2189', 
        cat:'carniceria',
        title:'Milanesas carne vacuna congeladas', 
        description:'x 2kg.', 
        price:1359.00, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/204878-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
        id:'ac2486', 
        cat:'carniceria',
        title:'Tortuguita novillo', 
        description:'x kg.', 
        price:499.00, 
        pictureUrl:'https://carrefourar.vtexassets.com/arquivos/ids/196459-1200-auto?width=1200&height=auto&aspect=true'
    }
]

const task = new Promise( res => {
    res(products)
}, 2000)

export const getMock = () => task