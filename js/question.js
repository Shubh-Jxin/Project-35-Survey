class Question {
    constructor(){
       this.q1= createElement('h2', " Q1.Do you think we should provide free education to the Children of the Workers?");
       this.q1_ans= createRadio('h3');
       this.q1_ans.option("Yes");
       this.q1_ans.option("No");

       this.q2= createElement('h2', " Q2.If yes, are you willing to contribute any money towards this Cause?");
       this.q2_ans= createRadio('h3');
       this.q2_ans.option("Yes");
       this.q2_ans.option("No");

       this.q3= createElement('h2', " Q3.How much money are you willing to Contribute?");
       this.q3_ans= createRadio('h3');
       this.q3_ans.option("Rs.1000");
       this.q3_ans.option("Rs.5000");
       this.q3_ans.option("Rs.8000");

       this.q4= createElement('h2', "Q4.Any Suggestions?");
       this.q4_ans= createInput("Write Them Down Here");

       this.submitSurvey= createButton("Submit");


    }

    hide(){
        this.q1.hide();
        this.q1_ans.hide();
        this.q2.hide();
        this.q2_ans.hide();
        this.q3.hide();
        this.q3_ans.hide();
        this.q4.hide();
        this.q4_ans.hide();
        this.submitSurvey.hide();
    }

    display(){
        this.q1.position(500,300);
        this.q1_ans.position(500,400);

        this.q2.position(500,500);
        this.q2_ans.position(500,600);

        this.q3.position(500,700);
        this.q3_ans.position(500,800);

        this.q4.position(500,850);
        this.q4_ans.position(500,900);
        this.q4_ans.style("height:100px");

        this.submitSurvey.position(1300,900);

        this.submitSurvey.mousePressed(()=>{
            Ans.push(this.q1_ans.value(),this.q2_ans.value(),this.q3_ans.value(),this.q4_ans.value())
            voter.ans=Ans;
            voter.updateDetails();
            question.hide();
            var thankYou= createElement("h1","Thank You!");
            thankYou.position(700,300);
            thankYou.style("font-size:150px");
        })

        
    }



}