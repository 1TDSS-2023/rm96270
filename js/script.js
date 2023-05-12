"use strict";

//console.log("Olá Mundo!");

// var nr1 = "10";
// var nr1 = "5";

// console.log(parseInt(nr1)+parseInt(nr2));

// let nome1 = "Dubas";
// //let nome2 = "Serbatinho";
// //const nome3 = "Julia";
// nome = "Ale";
// console.log(nome);

// if(nome1 != ""){
//     let nome1 = "Julia";
// }

// var nome

// console.log(nome1);

/* <button value="click" id="meu-btn">Click</button> */

// declaracao de button do html pelo id
// const btn = document.getElementById("meu-btn");

// // transformacao do btn em rgb
// // elemento.escutarEvento("evento", função)
// btn.addEventListener("click", function(){
//     // console.log(this.textContent)

//     // Função matemática Math
//     //randon = Retorna um numero aleatório entre 0 e 1. Ex: 0.23345678;
//     //floor  = Arrendonda o número para baixo.
//     //ceil  = Arrendonda o número para cima.
//     //round  = Arrendonda o número aleatório.

//     let r=0,g=0,b=0;

//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);

//     //this.setAttribute("NOME DO ATRIBUTO", "VALOR INICIAL OU ADICIONADO DO ATRIBUTO")
//     //this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
//     //com interpolacao
//     this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
// });

// /* <h2 class="tit-sec">Seçao de Fotos</h2> */
// //pegar um elemento pela classe/id se for unico
// const h2Element = document.querySelector(".tit-sec");
// //exibe o obj inteiro
// console.log(h2Element);

//querySelectorAll()

//Declaração de um ARRAY e seus métodos!
// let frutas = ["banana","maçã","laranja","morango","uva","amora","cereja","abacaxi"];
// //Imprimindo um array
// console.log(frutas)
// console.log(frutas[7])
// //Verificar tamanho do array através da propriedade length
// console.log(`O tamanho do Array é : ${frutas.length}`);

// //Inserir item ao final do array com o método push(nomeItem);
// frutas.push("pêssego");
// console.log(frutas)

// //Inserir item no inicio do array com o método push(nomeItem);
// frutas.unshift("kiwi");
// console.log(frutas);

// //Removendo um item ao final do array com o método push(nomeItem);
// frutas.pop();
// console.log(frutas);

// //Removendo um item no inicio do array com o método push(nomeItem);
// frutas.shift();
// console.log(frutas);

//Localizando um item no array com o método indexOf(nomeItem);
//Obs: O método indexOf(nomeItem) retorna o indice do item.
// let indice = frutas.indexOf("uva");
// console.log(`Indice do item buscado ${indice}`);
// console.log(`Elemento buscado ${frutas[indice]}`);

//Removendo um item do array com o método splice(indice do item, quantidade de vezes que o indice será removido)
//Obs: Utilize o método indexOf(nomeItem) para descobrir o indice do item.
// let inidice = frutas.indexOf("amora")
// console.log(`Elemento no índice antes da remoção: ${frutas[indice]}`);
// frutas.splice(indice,1);
// console.log(frutas);
// console.log(`Elemento no índice após a remoção : ${frutas[indice]}`);

// //Impressão do array em tabela
// console.table(frutas);
// //percorrer array + simplificacao da array function
// frutas.forEach( (fruta)=>{
//     console.log("Fruta da vez: " + fruta);
// } );

// let  nr1 = [1,2,3,4,5];
// let  nr2 = [6,7,8,9,10];
// console.log("Array 1: " + nr1);
// console.log("Array 2: " + nr2);

// //Concatenando arrays em um novo array
// let nr3 = [nr1,nr2];
// console.log("Novo array: " + nr3);
// //Imprimindo o novo array com forEach
// //Imprime os dois arrays
// nr3.forEach((nr)=>{
//     //Imprime os numeros dos dois arrays separadamente
//     nr.forEach((n)=>{
//         console.log("Itens do novo array: " + n);
//     })
// });

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log("ARRAY 1 : " + nr1);
// console.log("ARRAY 2 : " + nr2);
// //Concatenando arrays em um novo array com operador SPREAD( ... );
// //Numeros soltos dentro do array
// let nr3 = [...nr1,...nr2];
// console.log("NOVO ARRAY : " + nr3);
// //Imprimindo o novo array com forEach
// nr3.forEach((nr)=>{
//     console.log("ITENS DO NOVO ARRAY : " + nr);
// });

//converter elemento para array
//opcao1
// const imgElements = [...document.getElementsByTagName("img")];
// // exemplo de for
// // for (let index = 0; index < imgElements.length; index++) {
// //     console.log(imgElements[index].src);
// // }
// //opcao2
// //const imgElementsArray = [...imgElements];

// imgElements.forEach((img)=>{
//     img.setAttribute("width","10%");
// });

//query pegar o elemento que vc quiser e ja tem forEach incluso
const elements = [...document.querySelectorAll(".teste")];
// console.log(elements);

elements.forEach( (el)=>{
    if(el.tagName.toLowerCase() == "img"){
        console.log(el);
    }
});


