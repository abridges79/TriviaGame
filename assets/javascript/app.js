
window.onload = function(){
  setTimeout(function(){
    submitAnswers();
  }, 45000);
 };

 function countDown(i) {
  var int = setInterval(function () {
      document.getElementById("displayDiv").innerHTML = "Seconds Remaining: " + i;
      i-- || clearInterval(int);  //if i is 0, then stop the interval
  }, 1000);
}
countDown(45);


function submitAnswers() {
    var total = 4;
    var score = 0;
    var noAnswer = 0;
    var misses = 0;
    var timer = 0;

    //Get user input
    var q1 = document.forms['quizForm']['q1'].value;
    var q2 = document.forms['quizForm']['q2'].value;
    var q3 = document.forms['quizForm']['q3'].value;
    var q4 = document.forms['quizForm']['q4'].value;
      

    // Set correct answers
    var answers = ["a","a","b","b"];
    
    for(var i = 1; i <= total; i++) {
      // Check answers
      if (eval('q' + i) == answers[i - 1]) {
        score++;
      }
      else if (eval('q' + i) != answers[i - 1]) {
        misses++;
    }
  }  
    // Display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>Correct Answers: <span>' + score + '</span> <br>Wrong Answers: <span>' + misses + '</span> </h3>'; 
    
  }