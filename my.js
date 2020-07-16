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
document.getElementById("first").innerHTML=dis;

// var i;
// var text = "";
// var names = ["shehan","sandeepa","shamali", "kasun","rashmika"];
// for(i=0; i<names.length; i++)
// {
//     text = text + names[i] + "<br>";
// }
// document.getElementById("first").innerHTML=text;

