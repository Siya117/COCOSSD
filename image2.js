img2 = "";

function preload()
{
    img2 = loadImage('clock.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    document.getElementById("status2").innerHTML = "Status: Detecting Objects";
} 


function back()
{
    window.location = "index.html";  
}

function draw()
{
    image(img2, 0, 0, 650, 420);
}