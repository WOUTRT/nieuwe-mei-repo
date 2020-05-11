let optionArray = ["steen", "papier", "schaar"];
let mijnScore = 0;
let jouwScore = 0;

$(":button").on("click", function () {
  let elemId = $(this).attr("id");
  console.log(elemId);
  if ($(this).hasClass("marked")) {
    $(this).toggleClass("chosen").toggleClass("marked");
  
    setTimeout(gameStart(), 1000);
  } else {
    $(":button").removeClass("marked", "chosen");
    $(this).toggleClass("marked");
  }
});
let counter = 0;
function gameStart() {
  let interval = setInterval(function () {
    counter++;
    switch (counter) {
      case 1:
        $("#pLeft, #pRight").text("steen!");
        break;
      case 2:
        $("#pLeft, #pRight").text("papier!");
        break;
      case 3:
        $("#pLeft, #pRight").text("schaar!");
      
        break;
      case 4:
        clearInterval(interval);
        setTimeout(gameResult(), 4000);
    }
  }, 1000); 
}
function gameResult() {
  let randomNmbr = Math.floor(Math.random() * optionArray.length);
  let cpuChoice = optionArray[randomNmbr];
  let userChoice = $(".chosen").attr("id");
  let result = "It's a Tie!";
  console.log(userChoice);
  console.log(cpuChoice);
  switch (cpuChoice) {
    case "steen":
      $("#imgRight").addClass("steen");
      break;
    case "paper":
      $("#imgRight").addClass("papier");
      break;
    case "scissors":
      $("#imgRight").addClass("schaar");
      break;
  }
  $("#pRight").text(cpuChoice.toUpperCase() + "!");
  switch (userChoice) {
    case "btnsteen":
      console.log("get's here");
      $("#imgLeft").addClass("steen");
      $("#pLeft").text("STEEN!");
      if (cpuChoice == "papier") {
        result = "jij wint!";
        jouwScore++;
      } else if (cpuChoice == "schaar") {
        result = "ik win!";
        mijnScore++;
      }
      break;
    case "btnpapier":
      $("#imgLeft").addClass("papier");
      $("#pLeft").text("PAPiER!");
      if (cpuChoice == "schaar") {
        result = "jij wint!";
        jouwScore++;
      } else if (cpuChoice == "steen") {
        result = "ik win!";
        mijnScore++;
      }

      break;
    case "btnschaar":
      $("#imgLeft").addClass("schaar");
      $("#pLeft").text("SCHAAR!");
      if (cpuChoice == "steen") {
        result = "jij wint!";
        jouwScore++;
      } else if (cpuChoice == "papier") {
        result = "ik win!";
        mijnScore++;
      }

      break;
  }
  $("#result").text(result);
  $("#score1").text("mijn score: " + mijnScore);
  $("#score2").text("jouw score: " + jouwScore);

  setTimeout(function () {
  
    counter = 0;
    $(":button").removeClass("chosen", "marked");
  }, 1000);
}
