class Voter{
    constructor(){
        this.name=null;
        this.email=null;
        this.index=null;
    }

    getCount(){
        var voterCountRef= database.ref('voterCount');
        voterCountRef.on('value', function(data){
            voterCount= data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            voterCount: count
        })
    }

    updateName(){
        var voterIndex= "players/player"+ this.index;
        database.ref(voterIndex).set({
            name:this.name,
            email:this.email
        })
    }
}