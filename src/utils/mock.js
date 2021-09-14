const bebidas = [
    {id:1, marca: "Andes", tipo:"Lager", precio:170},
    {id:2, marca: "Andes", tipo: "Roja", precio:170},
    {id:3, marca: "Patagonia", tipo:"IPA", precio:200},
    {id:4, marca: "Patagonia", tipo:"APA", precio:220},
    {id:5, marca: "Quilmes", tipo:"Negra", precio:250},
    {id:6, marca: "Quilmes", tipo:"Lager", precio:120}
];

export const bebidaCerveza = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(bebidas);
    }, 2000)
});