function clk(src)
{
    
    var images = ["images/paper.png", "images/rock1.png", "images/scissor.png"];
    var rand = Math.floor(Math.random()*images.length);

    var pic2 = document.createElement("img");
    
    pic2.src = src;
    document.getElementById("flex").appendChild(pic2);

    var h1 = document.createElement("h1");
    

    document.getElementById("flex").appendChild(h1);

    var pic =  document.createElement("img");
    
    pic.src = images[rand];
    document.getElementById("flex").appendChild(pic);

    if(src == pic.src)
    {
       // var h1 = document.createElement("h1");
        var text = document.createTextNode("YOU TIED");
        h1.appendChild(text);
        h1.setAttribute("id","hh3");
        pic.setAttribute("class","image6");
        pic2.setAttribute("class","image6");
       // document.getElementById("flex").appendChild(h1);
    }

    else if(src == "file:///home/shehan/Desktop/JavaScript/rock_paper_scissor/images/rock1.png"  && pic.src== "file:///home/shehan/Desktop/JavaScript/rock_paper_scissor/images/scissor.png")
    {
       // var h1 = document.createElement("h1");
        var text = document.createTextNode("YOU WON");
        h1.appendChild(text);
        h1.setAttribute("id","hh1");
        pic.setAttribute("class","image4");
        pic2.setAttribute("class","image4");
       // document.getElementById("flex").appendChild(h1);
    }

    else if(src == "file:///home/shehan/Desktop/JavaScript/rock_paper_scissor/images/paper.png"  && pic.src== "file:///home/shehan/Desktop/JavaScript/rock_paper_scissor/images/rock1.png")
    {
       // var h1 = document.createElement("h1");
        var text = document.createTextNode("YOU WON");
        h1.appendChild(text);
        h1.setAttribute("id","hh1");
        pic.setAttribute("class","image4");
        pic2.setAttribute("class","image4");
       // document.getElementById("flex").appendChild(h1);
    }
    else if(src == "file:///home/shehan/Desktop/JavaScript/rock_paper_scissor/images/scissor.png"  && pic.src== "file:///home/shehan/Desktop/JavaScript/rock_paper_scissor/images/paper.png")
    {
       // var h1 = document.createElement("h1");
        var text = document.createTextNode("YOU WON");
        h1.appendChild(text);
        h1.setAttribute("id","hh1");
        pic.setAttribute("class","image4");
        pic2.setAttribute("class","image4");
       // document.getElementById("flex").appendChild(h1);
    }
    else
    {
       // var h1 = document.createElement("h1");
        var text = document.createTextNode("YOU LOSE");
        h1.appendChild(text);
        h1.setAttribute("id","hh2");
        pic.setAttribute("class","image5");
        pic2.setAttribute("class","image5");
       // document.getElementById("flex").appendChild(h1);
    }


}

function reset()
{
   var x = document.getElementsByClassName("image");
   x[0].remove(); 

}

document.addEventListener('click', function(e) {
    e = e || window.event; 
    var target = e.target; 
    if(target.tagName == 'IMG'){ console.log(target.src); }
   }, false);

   function show(src)
   {
       console.log(src); 
   }

   
