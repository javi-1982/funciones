
// Primer ejercicio//

function esImpar(valor = 0) {
    return (valor % 2 != 0) ?
    `El numero ${valor} es impar` : `El numero ${valor} es par`;
}
//coloque el numero parametro//
console.log(esImpar (10));


//Segundo ejercicio//

function compararNumeros(numero1 , numero2){
    
    if(numero1 > numero2){
        return numero1 + " es mayor que " + numero2;
    }

    else if (numero1 < numero2){
        return numero2 + " es mayor que " + numero1;
    }

    else{
        return "Ambos numeros son iguales";
    }
}
//coloque el numero parametro//
console.log (compararNumeros (10, 5))



//Tercer ejercicio//

function esMultiploDe5(numero) {
    if(numero % 5 === 0){
        return numero + " si es multiplo de 5";
    }

    else{
        return numero+ " no es multiplo de 5";
    }    
}

//coloque el numero parametro//
console.log (esMultiploDe5 (10))


//Cuarto ejercicio//

function numerosHasta(num){
    let resultado = '';
    for (let i = 0; i <= num; i++){
        resultado += i + ' ';
    }
    return "los numeros son: "+ resultado;
}

//coloque el numero parametro//
console.log(numerosHasta(10));


//Quinto ejercicio//

function numeroDePalabras(palabra,numero)
{
    let resultado = '';
    for (let i = 0; i < numero; i++){
        resultado += palabra + ' ';
    }
    return resultado;
}
//coloque la palabra y numero de repeticiones//

console.log(numeroDePalabras("hola", 5));

//Sexto ejercicio//

function impValArray(array){
    return array.join(', ');
}
console.log(impValArray([1,2,3,4,5]));


//Septimo ejercicio//

function impArraySinQuinto(array){
    if (array.length !==10){
        throw new Error;
    }
    return array.filter((_, index)=> index!==4).join(', ');
}
console.log(impArraySinQuinto([1,2,3,4,5,6,7,8,9,10]));


//Septimo ejercicio//

function multiplicar(array, multiplo){
    const resultado = array.map(numero => numero * multiplo);
    return resultado.join(', ');
}
console.log(multiplicar([1, 2, 3, 4, 5], 2));
