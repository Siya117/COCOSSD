img4 = "";

function preload()
{
    img4 = loadImage('fan.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    document.getElementById("status4").innerHTML = "Status: Detecting Objects";
} 


function back()
{
    window.location = "index.html";  
}

function draw()
{
    image(img4, 0, 0, 650, 420);
}