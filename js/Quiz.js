class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //fixed bug with hide not being defined
    if(question.hide() !== undefined) {
    //write code here to hide question elements
    question.hide();
    }

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    textSize(30)
    fill("black")
    text("The results are in:", 300, 60)
    strokeWeight(4)
    line(303,64,535,64)

    //call getContestantInfo( ) here

    //We have to call to the class and not the object we made.
    Contestant.getallContestantInfo();
    
    if(allContestants !== undefined) {
      textSize(20)
      fill("blue")
      text("NOTE: contestants that answered correctly are in green", 200, 230)
      var position = 275;

      //loops through all the properties of each Contestant.
      for(var contest in allContestants) {
        //this filters the variable contest to only the contestants in the game.
        //the game works fine without it.
        if(contest === "contestant" + contestant.index)
        var correctAnswer = "2"

        //if the answer for any of the contestants is correct answer make their name green, else make it red.
        //the variable contest contains all of the values within 
        if(correctAnswer === allContestants[contest].answer)
        fill("green")

        else
        fill("black")

        textSize(28)
        text(allContestants[contest].name + ":" + allContestants[contest].answer, 360, position)
        position = position + 35;

      }

    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
