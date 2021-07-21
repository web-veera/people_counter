//document.getElementById("count").innerText=5;

/*let myage = 19;
let dogage = 7;
console.log("Mydogage : ",myage*dogage); */

/*var bonus = 50;
bonus=bonus + 50;
console.log(bonus);
bonus= bonus - 75;
console.log(bonus);
bonus = bonus + 45;
console.log(bonus); */

/*function num(){
    let o= 42;
    console.log(o);
}
num()*/
/*let lap1= 34;
let lap2= 33;
let lap3= 36;
function log(){
    console.log("total laps : ", lap1+lap2+lap3);
}
log();*/

/*let lapCompleted=0;
function complete(){
    lapCompleted= lapCompleted+1
    console.log(lapCompleted);
}
complete();
complete();
complete(); */

let count = 0;
function counter(){
    count += 1;
    document.getElementById("count").innerText=count;
}
let prevEnt= document.getElementById("entry")
function save(){
    prevEnt.textContent+= count + " - ";
    count=0;
    document.getElementById("count").textContent=count;
}
/*
let username = 'veera'
let message = "you have three new notifications! ";

let messageToUser= message+" "+ username;
console.log(messageToUser);

*/
/*
let name= 'veera';
let greeting = "Hi , my name is";
let mygreeting = greeting+" "+name+" !";
console.log(mygreeting);
*/