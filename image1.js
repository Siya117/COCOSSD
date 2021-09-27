img1 = "";

function preload()
{
    img1 = loadImage('ac.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    document.getElementById("status1").innerHTML = "Status: Detecting Objects";
} 


function back()
{
    window.location = "index.html";  
}

function draw()
{
    image(img1, 0, 0, 650, 420);
}