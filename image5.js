img5 = "";

function preload()
{
    img5 = loadImage('printer.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    document.getElementById("status5").innerHTML = "Status: Detecting Objects";
} 


function back()
{
    window.location = "index.html";  
}

function draw()
{
    image(img5, 0, 0, 650, 420);
}