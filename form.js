class Form{
    constructor(){
        this.heading= createElement("h1");

        this.name=createInput("");
        this.email=createInput("");

        this.nameText= createElement("h2");
        this.emailText= createElement('h2');

        this.button= createButton("Submit Information")
    }
    display(){
        this.heading.html("SURVEY TO HELP OUR WORKERS");
        this.heading.position(displayWidth/2-210,displayHeight/100);

        this.name.position(120,100);

        this.email.position(120,150);

        this.nameText.html("Name:");
        this.nameText.position(50,75);

        this.emailText.html("Email:");
        this.emailText.position(50,125);

        this.button.position(75,195);

        this.button.mousePressed(function(){
            this.name.hide();
            this.email.hide();
            this.emailText.hide();
            this.nameText.hide();

            player.up
        })
        
    }
}