var colors = ["red", "blue", "yellow", "green"]
var compSequence = [];
var playerSequence = [];
var rounds = 0;
var playerTurn = false;
var compTurn = true;

var addRed = function(){
    playerSequence.push("red");
    $("#red").fadeTo(300, 0.5).fadeTo(200, 1.0);
    check();
}

var addBlue = function(){
    playerSequence.push("blue");
    $("#blue").fadeTo(300, 0.5).fadeTo(200, 1.0);
    check();
}

var addGreen = function(){
    playerSequence.push("green");
    $("#green").fadeTo(300, 0.5).fadeTo(200, 1.0);
    check();
}

var addYellow = function(){
    playerSequence.push("yellow");
    $("#yellow").fadeTo(300, 0.5).fadeTo(200, 1.0);
    check();
}

var addColor = function(){
    compSequence.push(colors[Math.floor((Math.random() * 4) + 0)]);
}

var displaySequence = function(){
    compSequence.forEach(function(color, index){
        setTimeout(function(){
            $("#" + color).fadeTo(700, 0.3).fadeTo(700, 1.0);
        },
        1500 * index);
    })
    //playerTurn = true;
}

var check = function(){
    for(x = 0; x < playerSequence.length; x++){
        if(playerSequence[x] !== compSequence[x] && rounds === 0){
            $(".modal").css("display", "block");            
            $("#rounds").html("You didn't last a single round. Come on! Focus!");        
        }else if(playerSequence[x] !== compSequence[x] && rounds === 1){
            $(".modal").css("display", "block");            
            $("#rounds").html("You only lasted a single round. Whats wrong?");        
        }else if(playerSequence[x] !== compSequence[x] && rounds > 1 && rounds < 5){
            $(".modal").css("display", "block");            
            $("#rounds").html("You only lasted " + rounds + " rounds. Whats wrong?");        
        }else if(playerSequence[x] !== compSequence[x] && rounds > 5 && rounds < 10){
            $(".modal").css("display", "block");            
            $("#rounds").html("You lasted " + rounds + " rounds. Not too bad..");
        }else if(playerSequence[x] !== compSequence[x] && rounds > 10){
            $(".modal").css("display", "block");            
            $("#rounds").html("You lasted " + rounds + " rounds. Amazing!");
        }
    }
    if(playerSequence.length === compSequence.length){
        gameEngine();
    }
}

var gamestatus = false;

var gameEngine = function(){
    gamestatus = true;    
    if(gamestatus == true){
        addColor();
        rounds++;
        displaySequence();
    }
    playerSequence = [];
}

var newGame = function(){
    $(".modal").css("display", "none");
    $("#start").fadeOut(1000).css("display", "none");
    compSequence = [];
    playerSequence = [];
    rounds = 0;
    setTimeout(gameEngine(), 2000);
}





