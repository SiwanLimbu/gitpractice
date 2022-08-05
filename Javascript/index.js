//1.Ways to print in Javascript
//console.log("Hello World");
// alert("me");
//document.write("THis is document write");

//2.Javascript console API
//console.log("this is me");
//console.warn("this is warning");
//console.error("this is an error");

//3.JavaScipt Variables

var number1 = 3;
var number2 = 4;
//console.log(number1 + number2);

//datatypes in javascript

//strings

var str1 = "this is a string";
// console.log(str1);

var marks = {
    karina: 56,
    Winter: 55,
    Ryujin: 67
}
//console.log(marks);

//Booleans

//var a = true;
// var b = false;

// console.log(a,b)

//arrays in javascript

var arr = [1, 2, "winter", 3, 4, 5];
// console.log(arr[0])
// console.log(arr[2])

// console.log(arr)

var a = 100;
var b = 10;
//console.log("the value of a+b is", a+b);
//console.log("the value of a-b is", a-b);
//console.log("the value of a*b is", a*b);

//assignment operators

var c = b;
//c += 2;
// c -=2;
// console.log(c)

//comparision operators

var x = 34;
var y = 56;
//console.log(x==y)
//console.log(x>=y)

//Logical operator

//console.log(true && true)
//console.log(true && false)

//console.log(true || true)
//console.log(true || false)
//console.log(false || true)
//console.log(false || false)

//logical not
//console.log(!true)
//console.log(!false)

//functions

function avg(a, b) {
    return (a + b) / 2;
}
c = avg(4, 6);
// console.log(c)

//conditionals in JavaScript

var age = 20;
/* if (age > 8){
  console.log('You are not a kid')
}
else{
  console.log('You are a kid')
}
*/

//if else ladder

/*if(age > 32){
    console.log('YOU ARE NOT A KID');
}
else if(age > 26){
    console.log('NO LONGER A KID');
}
else if(age > 22){
    console.log('NOT A KID ANYMORE');
}
else if(age > 18){
    console.log('STILL NOT A KID ANYMORE');
}
else{
    console.log('YOU ARE A CHILD');
}
console.log('END OF LADDER');
*/

//take an inout from the user and determine whether they can drink rasna water or not

/*var age = window.prompt("enter your age:");
if(age > 18){
    console.log("YOu can drink rasna water");
}
else{
    console.log("You cannot drink rasna water");
}
*/

//loops in javascript

/*var arr = [1,2,3,4,5,6,7]
console.log(arr)
for(var i=0; i<arr.length;i++)
{
    console.log(arr[i])
}*/

/*var arr= [1,2,3,4]

let j = 0
while (j < arr.length){
    console.log(arr[j])
    j++
}
*/

/*var arr = [1, 4, 6, 8, 10]
for (var i = 0; i < arr.length; i++) {
    if (i == 3) {
        //break;
        continue;
    }
    console.log(arr[i])
}*/

//Methods in array
/*let mina = ["Idol", "Dancer", 24 , null, true];
console.log(mina.length)

// mina.pop();
console.log(mina)
//mina.push("Winter");

//mina.shift();*/

//let Winter = "I love Mina from Twice";
//console.log(Winter.length)
//console.log(Winter.indexOf("Mina"))

//console.log(Winter.slice(0, 7))

/*d = Winter.replace("love", "like");
d= d.replace("I", "Chaeyoung");
console.log(d, Winter)*/

/*let myDate = new Date()
console.log(myDate.getTime())
console.log(myDate.getFullYear())
console.log(myDate.getDay())
console.log(myDate.getHours())
*/

//DOM manipulation

//let elem=document.getElementById('click');
//console.log(elem)

//let elemClass = document.getElementsByClassName("container");
//console.log(elemClass)

//elemClass[0].style.background = 'yellow';
//elemClass[0]. classList.add("Minari")
//elemClass[0].classList.add("Mina")

//console.log(elemClass[0].innerHTML)
//console.log(elemClass[0].innerText)

/*tn = document.getElementsByTagName('div')
console.log(tn)

createdElement = document.createElement('p');
createdElement.innerText = "This is a created child ELement";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b')
createdElement2.innerText = "THis is a created bold";
tn[0].replaceChild(createdElement2, createdElement)


sel = document.querySelector('.container')
console.log(sel)

sel= document.querySelectorAll('.container')
console.log(sel)

function clicked(){
    console.log('The button was clicked')
}

window.onload = function(){
    console.log("the document was loaded")
}

firstcontainer.addEventListener('click', function(){
    console.log("clicked")
})

firstcontainer.addEventListener('mouseover',function(){
    console.log("mouse on container")
})

firstcontainer.addEventListener('mouseout', function(){
    console.log('mouse out of container')
})

firstcontainer.addEventListener('click',function(){

    document.querySelectorAll('.container')[1].innerHTML = "<b> WE HAVE CLICKED </b>"
    console.log("clicked on container")

})*/

//Arrow Functions

/*logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set Interval fired</b>"
    console.log("I am your log")
}
setTimeout(logKaro, 5000)*/

//use clearInterval/clearTimeout to cancel setInterval/setTImeout

//JavaScript LocalStorage
 //JSON

 /*obj = {name: "Winter", length: 1}
 jso = JSON.stringify(obj);
 console.log(jso)

 parsed = JSON.parse({"name":"Winter","length":1})
 console.log(parsed);
 */
