class Voter{
    constructor(){
        this.name=null;
        this.index= null;
        this.email=null;
        this.age=null;
        this.gender=null;
        this.ans= null;
    }
    
    getCount(){
        var voterCountRef=database.ref("voterCount");
        voterCountRef.on("value",(data)=>{
            voterCount=data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            voterCount:count
        })
    }

    updateDetails(){
        var voterIndex="voter/voter"+this.index;
            database.ref(voterIndex).set({
                name:this.name,
                email:this.email,
                gender:this.gender,
                age:this.age,
                ans:this.ans
            });
    }

    updateVote(vote){
        database.ref("voter/voter"+this.index).set({
            vote: vote
        })
    }

};