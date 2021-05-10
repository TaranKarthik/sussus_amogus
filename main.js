status = "";

function preload(){

}


function setup(){
    ctx = createCanvas(300,300);
    ctx.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);
   
}

function draw(){
    image(video,0,0,300,300);
}


function start(){
    idenitify = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    var obj_name = document.getElementById("serch").value;
    console.log(obj_name);
}


function modelLoaded(){
    console.log("MOdel loaded");
    status = true;
    
    
}

