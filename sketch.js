var database;
var votersEmail;
var votersAnswers;
var voterCount;
var player,form;

function setup() {
  createCanvas(displayWidth,displayHeight);
  database=firebase.database();
  form= new Form;
}

function draw() {
  form.display();
  background(255)
}