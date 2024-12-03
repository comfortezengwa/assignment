let button = document.getElementById("btn");

let p = document.getElementById("text");

let bulb = document.getElementById("circle");


function handleButtonClick(){
    if(button.innerText =="INFLATE"){
        //change button text to deflate
        button.innerText="DEFLATE";
        //change p text to ballon is deflated
        p.innerText = "Ballon is Inflated";
        //change background color of bulb to yellow
        bulb.style.backgroundColor = "green"
        //change ballon width to 350px
        bulb.style.width = '350px'
        //change ballon height to 350px
        bulb.style.height = '350px'
    }  else{
        //change button text to turn off
        button.innerText="INFLATE";
        //change p text to light is on
        p.innerText = "Ballon is Deflated";
        //change background color of bulb to black
        bulb.style.backgroundColor = "black"
        //change ballon width to 50px
        bulb.style.width = '50px'
        //change ballon height to 50px
        bulb.style.height = '50px'
    }
}