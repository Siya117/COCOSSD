img3 = "";

function preload()
{
    img3 = loadImage('curtain.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    document.getElementById("status3").innerHTML = "Status: Detecting Objects";
} 


function back()
{
    window.location = "index.html";  
}

function draw()
{
    image(img3, 0, 0, 650, 420);
}