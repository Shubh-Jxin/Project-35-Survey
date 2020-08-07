class Form{
    constructor(){
        this.heading= createElement("h1");

        this.name=createInput("")
        this.email=createInput("");
        this.age=createInput("")

        this.nameText= createElement("h2");
        this.emailText= createElement('h2');
        this.genderText= createElement('h2');
        this.ageText= createElement('h2');

        this.button= createButton("Submit Information")

        //this.resetButton=createButton("RESET");

        this.gender= createSelect();
    }

    hide(){
        this.name.hide();
        this.email.hide();
        this.emailText.hide();
        this.nameText.hide();
        this.button.hide();
        this.age.hide();
        this.ageText.hide();
        this.gender.hide();
        this.genderText.hide();

    }
    display(){

        //this.resetButton.position(1400,200)
        this.heading.html("SURVEY TO HELP THE YOUNG CHILDREN");
        this.heading.position(800,25);

        this.name.position(570,200);

        this.email.position(570,300);

        this.nameText.html("Name:");
        this.nameText.position(425,175);

        this.emailText.html("Email:");
        this.emailText.position(425,275);

        this.genderText.html("Gender:");
        this.genderText.position(425,375);

        this.ageText.html("Age:");
        this.ageText.position(425,475);

        this.button.position(575,595);
        this.button.style("background-color:red");
        this.button.style("color:white")
        

        this.gender.position(570,400);
        this.gender.option("Female");
        this.gender.option("Male");
        this.gender.option("Other");    
        this.gender.selected('Female');

        this.age.position(570,500);

        this.button.mousePressed(()=>{
            form.hide();
            survey.updateState(1);
            survey.play();
            voterCount+=1;
            voter.index= voterCount;
            voter.updateCount(voter.index);
            survey.updateState(1);
            voter.name= this.name.value();
            voter.age= this.age.value();
            voter.email= this.email.value();
            voter.gender= this.gender.value();
            voter.updateDetails();
        })

        // this.resetButton.mousePressed(function(){
        //     database.ref("/").update({
        //         voterCount:0,
        //         surveyState:0
        //     })
        // })

    }
}