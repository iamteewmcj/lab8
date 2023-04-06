$(document).ready(function(){
    correct = ["Arsenal", "6", "Manchester City", "Ring-ding-ding-ding-dingeringeding"];
    questions = ["What is the best football club","How many Champions League trophies does Liverpool have?", "Who won Premier League last year", "What does the fox say?"]
    choice_options = [["Arsenal","Liverpool","Real Madrid","Barcelona"],["5","6","14","2"], ["Newcastle", "Manchester United", "Manchester City", "Liverpool"], ["woof", "meow", "tweet", "Ring-ding-ding-ding-dingeringeding"]]

    // Generate quiz questions
    // ...

    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    quizBox.append ("<div class='question'>");


    for (var i = 0; i < questions.length; i++){

       $('.question').append ("<p class='d'> Q" + (i+1) + ". " + questions[i] +   "</p>");

       for (var j = 0; j < choice_options[i].length; j++){
          $('.question:last-child').append("<label><input type='radio' name='q" + (i+1) + "' value='" + choice_options[i][j] + "'>" + choice_options[i][j] + "</label>");
       }
    }






    countCorrect = 0;
    reset = false;

    $("button").click (function (event){
     if (reset == true) {
          countCorrect = 0
     }
     for (var i = 0; i < questions.length; i++){
          $("input[name=q"+(i+1)+"]").each (function(){
               choice = $(this).parent().text();
               if ($( this ).prop("checked") == true && correct[i] == choice){
                    countCorrect += 1;
               }
     });
    }
    $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    reset = true
    });

});
