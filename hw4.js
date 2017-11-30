var rock = "<img src='././img/rock.jpg' width='150'>";
var paper = "<img src='././img/paper.jpg' width='150'>";
var scissors = "<img src='././img/scissor.jpg' width='150'>";
var game = [rock,paper,scissors];
var rand = Math.floor(Math.random()*game.length);
var randp = Math.floor(Math.random()*game.length);

var playerPoints = 0;
var cpuPoints = 0;
var loop = new Boolean(true);
//     // Enter Rock Paper or Scissors
//     //        0     1         2
    var player = prompt("Please enter: 0 = Rock, 1 = Paper, 2 = Scissors");
    var cpu = game[rand];
 
    // //Check for winner
    
    if(player == 0 && cpu == paper){
        alert("You Lose!");
        document.write("Paper Beats Rock CPU WINS!<br>");
        cpuPoints++;
        document.write("User choice: "+game[player]+" CPU choice: "+cpu);
    }
    else if(cpu == rock && player == 1){
        alert("You Win!");
        document.write("Paper Beats Rock YOU WIN!<br>");
        playerPoints++;
        document.write("User choice: "+game[player]+" CPU choice: "+cpu);
    }
    
    else if(player == 1 && cpu == scissors){
        alert("You Lose!");
        document.write("Scissors Beats Paper CPU WINS!<br>");
        cpuPoints++;
        document.write("User choice: "+game[player]+"<br> CPU choice: "+cpu);
    }
    else if(cpu == paper && player == 2){
        alert("You Win!");
        document.write("Scissors Beats Paper YOU WIN!<br>");
        playerPoints++;
        document.write("User choice: "+game[player]+" CPU choice: "+cpu);
    }
    
    else if(player == 2 && cpu == rock){
        alert("You Lose!");
        document.write("Rock Beats Scissors CPU WINS!<br>");
        cpuPoints++;
        document.write("User choice: "+game[player]+" CPU choice: "+cpu);
    }
    else if(cpu == scissors && player == 0){
        alert("You Win!");
        document.write("Rock Beats Scissors YOU WIN!<br>");
        playerPoints++;
        document.write("User choice: "+game[player]+" CPU choice: "+cpu);
    }
    else{
        document.write("Invalid Input");
    }

