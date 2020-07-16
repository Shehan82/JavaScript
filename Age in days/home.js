// function age()
// {
//    let input = document.getElementById("myinput").value;
//     if(input>0)
//     {
//         document.getElementById("t3").innerHTML= "Your age in days are : " + input*365;
//     }
   

// }

function reset()
{
    document.getElementById("result").remove();
}

function age()
{
    let input = document.getElementById("myinput").value;
    let result = 365*input;
    var h1 = document.createElement("h1");
    var text = document.createTextNode("Your age in days is : " + result);
    h1.setAttribute("id", "result");
    h1.appendChild(text);
    document.getElementById("t3").appendChild(h1);

}