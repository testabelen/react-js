const bebidas = [
    {id:1, categoria: "Cervezas", marca: "Andes", tipo:"Lager", precio:170},
    {id:2, categoria: "Vinos", marca: "Santa Julia", tipo: "Blanco", precio:370},
    {id:3, categoria: "Espumantes", marca: "Chandon", tipo:"Brut", precio:2000},
    {id:4, categoria: "Destilados", marca: "Apostoles", tipo:"GIN", precio:3220},
    {id:5, categoria: "Cerveza", marca: "Quilmes", tipo:"Negra", precio:250},
    {id:6, categoria: "Vinos", marca: "Valmont", tipo:"Tinto", precio:700}
];



export const bebidaCerveza = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(bebidas);
    }, 2000)
});

//Detail//

const bebida = {id:7, marca:"Imperial", tipo:"Roja", precio:230}

export const bebidaCervezaImperial = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(bebida);
    }, 2000)
});