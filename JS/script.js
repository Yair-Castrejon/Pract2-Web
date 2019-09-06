// /* var, const, let
// console.log("H");
// console.table(array);
// */

// // let x=[1,2,3,4,5,6,7,8,9,1,2,3];

// // console.table(x);

// // for(let i=0; i<x.length; i++){
// // if(x[i]===4){
// //     console.log("sup");
// // }

// //     console.log(x[i]);
// // }



// const persona={
//     name: 'Cuac',
//     age: 25,
//     estatura: 172,
//     address:{
//         calle: 'Paseo del lago',
//         numero: 19200,
//         colonia: 'Porticos del lago'
//     },
//     birth:function(){
//         return new Date().getFullYear() -this.age;
//     }
// }

// console.log(persona.birth);

// // let hw=function(){
// //     console.log('Sopas');
// // }
// // hw();
// class Tarea {
//     constructor(name, priority) {
//         this.name = name;
//         this.priority = priority;
//     }
// }



// const tarea1= new Tarea('Tarea','High');
// const tarea2= new Tarea('Matar','Max');
// console.log(tarea1);
// console.log(tarea2);


// let nombre=prompt('Ingresa algo');
// document.getElementById('message').innerHTML="<h1> Quiuvas "+ nombre +"</h1>";




class Char{
    constructor(life){
        this.life=life;
    }
}

let hpH = new Char(100);
let hpE = new Char(100);

function attackH(){
    if(hpH.life>0){
        var direccion= document.getElementById('liE');
        hpE.life-=20;
        if(hpE.life<=0){
            hpE.life =0;
            direccion.innerHTML="<H1> 0 %</H1>";
        } 
        direccion.innerHTML="<H1>"+ hpE.life +"%</H1>";
        
    }
    if(hpE.life==0) win();
}
function attackE(){
    if(hpE.life>0){
        var direccion= document.getElementById('liH');
        hpH.life-=20;
        if(hpH.life<=0){
            direccion.innerHTML="<H1> 0 %</H1>";
        } 
        direccion.innerHTML="<H1>"+ hpH.life +"%</H1>";
        
    }
    if(hpH.life==0) win();
}

function win(){
    if(hpH.life==0){
        var direccion= document.getElementById('liH');
        direccion.innerHTML="<H1> 0 %</H1>";
        setTimeout(function(){
            alert('Enemy wins!');
            window.location.reload(false);
        }, 2000);
    }
    if(hpE.life==0){
        var direccion= document.getElementById('liE');
        direccion.innerHTML="<H1> 0 %</H1>";
        setTimeout(function(){
            alert('Hero wins!');
            window.location.reload(false);
        }, 50);
    }
}