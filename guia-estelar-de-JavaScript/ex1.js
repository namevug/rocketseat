    // 1. Declare uma variável de nome weight

//let weight

// 2. Que tipo de dado é a variável acima?

//console.log(typeof weight) 
  
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean

*/
// let name ="Vug"
// let age = 24
// let stars = 4.8
// let isSubscribed = true
/*
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weigth> kg.

        Atenção, substitua <name> <age> e <weigth> pelos valores de cada propriedade do objeto
*/        

let student = {
    name: "Vug",
    age: 24,
    weigth: 4.8,
    isSubscribed: true,
};

//console.log(typeof student)
//object
//console.log(`${student.name} de idade ${student.age} pesa ${student.weigth} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja somento o Array vazio.
*/  

let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/ 

students = [
    student
]

/*
    7. Coloque no console o valor da posição zero do Array acima.
*/

// console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const john = {
    name: "John",
    age: 22,
    weigth: 65.8,
    isSubscribed: true,

}

students[1] = john

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

//Resposta: A Resposta é "undefined" porque minha variável "a" sofre um hoisting.