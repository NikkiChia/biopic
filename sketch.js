var headshot;
function preload() {
	headshot = loadImage('headshot.png');
}
function setup() {
	headshot.resize(20,0)
	createCanvas(400, 600);
}

function draw() {
	noStroke();
	fill(241,213,204);
	rect(0,120,400,480);
	image(headshot,125,40);
}
