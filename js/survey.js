class Survey{
    constructor(){}
    getState(){
        var surveyStateRef= database.ref("surveyState");
        surveyStateRef.on("value", function(data){
            surveyState= data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            surveyState:state
        })
    }

    start(){
        if(surveyState===0){
            voter= new Voter();
            voter.getCount();
            form=new Form();
            form.display();
            
        }
    }

    play(){
        // if(surveyState===1){
            question= new Question;
            question.display();
        // }
    }
}