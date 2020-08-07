var database;
var voter,form,question, survey;
var voterCount;
var votersEmail;
var votersAnswers;
var surveyState=0;
var bg;
var Ans=[];

function preload(){
   bg= loadImage("bg.jpg");
}

function setup() {
  createCanvas(1300,1000);
  database=firebase.database();

  survey= new Survey();
  survey.getState();
  survey.start();

  if(surveyState === 1){
    // clear();
    survey.play();
  }
  
}

function draw() {  
  background(bg)
  
}