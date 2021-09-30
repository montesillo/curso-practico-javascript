const lista1 = [
    100,
    200,
    300,
    500
];

function calcularMediaAritmetica(lista){
    // let sumaLista1 = 0;
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista1 = sumaLista1 + lista[i];
    // }
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista1 = sumalista / lista.length;
    return promedioLista1;
}