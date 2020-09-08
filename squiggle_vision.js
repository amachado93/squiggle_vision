// creating a grid of squiggles
// inspired by daily walks in my apt

function setup(){
    createCanvas(400, 400);
    noLoop();
}
function draw(){
    background(50);
    
    noFill();
    stroke(255);
    
    for(let i = 0; i < width; i+= 50){
        for(let j = 0; j < height; j+=50){
            squiggle(i, j);
        }
    }    
}

function squiggle(x,y){

    beginShape();
        curveVertex(random(50)+x, random(50)+y);
        curveVertex(random(50)+x, random(50)+y);
        curveVertex(random(50)+x, random(50)+y);
        curveVertex(random(50)+x, random(50)+y);
        curveVertex(random(50)+x, random(50)+y);
    endShape(CLOSE);
}

function mousePressed(){
    loop();
}
function mouseReleased(){
    noLoop();
}