//helper
function esPar(numerito){
    return (numerito % 2 === 0);
}

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

//Calculadora de mediana

function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);

        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana General
const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGEneralCol = medianaSalariosCol(salariosColSorted);

//Mediana top 10
const spliceStart = parseInt((salariosColSorted.length * 90) / 100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log(
    medianaGEneralCol,
    medianaTop10Col,
);