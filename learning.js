//problems with var /let
// 1- var and let can be re-declared
// var a = 10;
// console.log(a);
// a = "saif";
// console.log(a);

// 2- var keyword is function scoped in function or golbal scoped and let keyword is block socped
// this means that once a var is declared it would be available anywhere in the function it was declared
//for ex 
// const num = 10;
// for (var i = 1; i<=num; i++){
//     if(i%2==0){console.log(i);};
// };
//in this block of code i should not be accesible outside the for loop but lets see the issue
// console.log("i equal to "+i);
//we are getting i = 11; which should not have happend
// for (let j = 1; j<=num; j++){
//     if(j%2!=0){console.log(j);};
// };
//not lets see if this i is available outside our loop
//console.log(j);
//here we get the error that j is not defined so the scope of let is not outside the loop
// var myname = "saif khan";
// console.log(`hi your name is ${myname}`);
// myname = 25;
// console.log(`and your age is ${myname}`);
// ^ here we used a single var to put multiple values 

// Functions

// how to define a function in javascript

// function fun_name(param1, param2){
//     do something
// };

// how to call/invoke a function in js

// fun_name(arg1,arg2);

// function sum(n1,n2){
//     let rv = 0;
//     rv = n1 + n2;
//     return rv;
// };

// console.log(sum(2,4));

// functions are treated as first class citizens in JavaScript
// a function can return a function and also a function can be used as an arg or param

// var a = function printhi(){
//     console.log("hello how are you");
// };

// this will invoke the function printhi as we have it in the var a; lol but amazing
// a(); 

// function calledfun(){
//     return function returnedfun(){
//         console.log("hi a am a returned function");
//     };
// };

// //now lets invoke calledfun and see how it behaves
// var a = calledfun();
// a();
// so as we can see called fun returned the returned fun and it got stored in a varibale named a and when we invoked a the returned function in invoked


// now lets understand function expressions
// in function expression the function is stored in a variable and it need not have a name
// lets see

// var a = function(){
//     console.log("hi i am a function expression");
// };
// // lets invoke this function expression using it specifier a 
// a();

// playing with code to see how it prints the whole function
// var a = function(){
//     console.log("hello how are you");
// };

// console.log(""+a);

// IIFE- Immediately involed function expression
//lets see how the code looks 
//iffy's are function statements wrapped in (brackets)and invoked right after it before the ';'

// var iife = (function abc(){
//     console.log("hey i am an IIFY function");
// })(); 

// ARRAYS IN JAVA SCRIPT
// array is a collection of elements in java script not collection of same type of elements
// for eg you can store int with bool and string values in JS array
// lets see
// myarray = ['car','bike',13,true,'wagonr'];
// console.log(myarray);
// console.log(myarray.length); // getting length of an array
// lets try to loop
// for(let i = 0; i < myarray.length; i++){
//     console.log(typeof(myarray[i]));
// };

// methods of an array 
// 1- pop method -> this method removes element at the last index of the array
// myarray.pop();
//console.log(myarray);

// 2- push method -> to add element after the last index in an array
// myarray.push("swift");
// console.log(myarray);

// 3- unshift method -> it adds element at the first index of the array 
// myarray.unshift("saif");
// console.log(myarray);

// 4- shift method -> it removes elements from the first index of the array
// myarray.shift();
// console.log(myarray);
// myarray.shift();
// console.log(myarray);

// 2D ARRAY IN JS
// let arr2d = [
//     ['saif','anas','falak'],
//     [24,21,18],
//     ['DPS','BHS','GHS']
// ];

//console.log(arr2d);
//CONSOLE.TABLE PRINTS 2D ARRAY IN FORM OF TABLE
// console.table(arr2d);

// @ STRINGS IN JS
//strings are immutable in js

// fname = "saif";
// lname = "khan";
// console.log(myname);

//to get length of a string its similar to array
//string_name.length
// console.log(myname.length);

// -> string slice method
// slice(start,end) start index is inclusive and end is exclusive
// newstr=myname.slice(0,-5);
// console.log(newstr);
//outputs saif


// -> Substring method
// syntax = substr(start,length); starts at start index and goes on till the length specified
// newstr = myname.substr(3,3);
// console.log(newstr);

// -> to uppercase and to lowercase
// syntax string.toUpperCase() or string.toLowerCase()
// newstr = myname.toUpperCase();
// console.log(newstr);

// -> concatenation 
// constr = fname +" "+ lname;
// console.log(constr);
// concat method
// nstr=fname.concat(" ali"," ",lname);
// console.log(nstr);

// -> trim method
// used to trim spaces in string and other unwanted symbols from the string 
// trim method does not changes the original 
//syntax string.trim() or string.trimLeft() or string.trimRight
// var greet = "      Good morning pizza";
// var str = greet.trim();
// console.log(str);

//also the is a replace method which works similarly

// --> Objects 
// 1- poperties
// to get length of a str we use str.length so here .length is a property
// likewise str.toUpperCase return the string in uppercase here .toUpperCase is a method of string
// all java script data types have properties except null undefined and nan
// there are two ways to access a property in js 
// 1- dot notation
// 2- square braket notation
    // let str = "hi i am saif";
    // console.log(str["length"]);
// Objects are collection of data ; objects are initialized using {curly braces}
    // let obj = {};
    // console.log(obj);  ==> this code logs an empty object in console
// Objects are stored in form of key:value pairs
//     let guests = {
//     name : "saif",
//     age : 26,
//     college : "SHUATS",
//     spillitout: function (){return `hi my name is ${this.name} and my age is ${this.age} and i study at ${this.college}.`}
//     };

// //  console.log(guests); // this prints the obj guests
// // console.log("hi my name is "+guests.name); // this prints only name
// //  console.log(guests.spillitout()); // we can call object method like this
// for(let x in guests){
//     console.log(`${x}:${guests[x]}`);
