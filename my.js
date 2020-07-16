console.log("hello");
var b = "my name is shehan";
console.log(b);


//var name = prompt("what is your name man");
//document.getElementById("first").innerHTML= "Your name is : " + name;

// numbers in java script

var num = 5.2;
console.log(2*num);

//functions

function fun()
{
    var name = prompt("Enter your name : ");
    alert("Your name is : " + name);
}

function sum(n1,n2)
{
    var result = n1 + n2;
    alert(result);
}

//sum(10,20);

// loooooooooooooops************************************************************

var num = 0;
var dis="";

while(num <100)
{
   dis = dis + num + "<br>";
   num++;
}
//document.getElementById("first").innerHTML=dis;

// var i;
// var text = "";
// var names = ["shehan","sandeepa","shamali", "kasun","rashmika"];
// for(i=0; i<names.length; i++)
// {
//     text = text + names[i] + "<br>";
// }
// document.getElementById("first").innerHTML=text;

// data types********************************************************************

//let name = "shehan";
//let num = 5;
//let fullName = {firstName:"shehan",lastName: "sandeepa"}; //object
let show = true;
let array = [1,2,3,4]; //array
let age; //undefined

//Strings in JS*****************************************************************

let moreCars = "Tesl\naudi"; //new line
let name = "shehansandeepa";
let r = name.indexOf('h');
console.log(r);
console.log(name.slice(2,5));
console.log(name.replace("han","000"));
console.log(name.toUpperCase());
console.log(name.split("a"));

var names = ["shehan","sandeepa","shamali", "kasun","rashmika","boooo"];
var numbers = [1,2,3,4];


console.log(names.pop());
console.log(names.push("vista"), names);
names.shift(); //this is remove first element in arry
names.unshift("btuuuuu");
console.log(names);

var mix = names.concat(numbers);
console.log(mix);

//object***********************************************************************

let fullName = {
    firstName:"shehan",
    lastName: "sandeepa",
    full: function()
    {
        return this.firstName +" "+this.lastName;
    }
};

console.log(fullName.full());







