(function() 
 {
  var allQuestions = [{
    question: "Little interest or pleasure in doing things ?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
    answer1: 0,
    answer2: 1,
    answer3: 2,
    answer4: 3

  }, {
    question: "Feeling down, depressed or hopeless ?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
    answer1: 0,
    answer2: 1,
    answer3: 2,
    answer4: 3
  }, {
    question: "Trouble falling or staying asleep, or sleeping too much ?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
    answer1: 0,
    answer2: 1,
    answer3: 2,
    answer4: 3
  },{
    question: "Feeling tired or having little energy ?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
    answer1: 0,
    answer2: 1,
    answer3: 2,
    answer4: 3
  }, {
    question: "Poor apetite or overeating ?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
    answer1: 0,
    answer2: 1,
    answer3: 2,
    answer4: 3
  },{
    question: "feeling bad about yourself or that you are a failure or have let yourself or your family down?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
    answer1: 0,
    answer2: 1,
    answer3: 2,
    answer4: 3
  },{
    question: "Trouble concentrating on things, such as reading the newspaper or watching TV?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
    answer1: 0,
    answer2: 1,
    answer3: 2,
    answer4: 3
  },{
    question: "Moving or speaking so slowly that other people could have noticed ? Or the opposite- Being so fidgety or restless that you have eben moving around a lot more than usual?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
    answer1: 0,
    answer2: 1,
    answer3: 2,
    answer4: 3
  },{
    question: "Thoughts that you would be better off dead or of hurting yourself in some way?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
    answer1: 0,
    answer2: 1,
    answer3: 2,
    answer4: 3
  }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h4 >Question No. ' + (index + 1) + ' :</h4>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
    function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" id=' +i +' name="answer" value=' + i + ' / >';
          input+=  '<label for=' + i +'>' +allQuestions[index].options[i] +'</label>';
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer1) 
          {
            correct= correct+0;
          }
          else if (selectOptions[i] === allQuestions[i].answer2) 
          {
            correct= correct+1;
          }
          else if (selectOptions[i] === allQuestions[i].answer3) 
          {
            correct= correct+2;
          }
          else if (selectOptions[i] === allQuestions[i].answer4) 
          {
            correct= correct+3;
          }
        }
        if ((correct >= 0) && (correct <= 4))
          {
            score.append('\t<h2>Kudos!! Everything looks Good.</h2></br><h3>Keep spreading love & positivity to the poeple around you.<h3>');
          }
        else if((correct >= 5) && (correct <= 9))
          {
            score.append('\t<h2>Turn around a Bad day to a Good one</h2></br><h3>Go out in the sun and watch the sunset </br>or read your favorite book </br>or watch a movie.</br> Spend some time with your Family, Friends & Nature. </h3> ');
          }
        else if((correct >= 10) && (correct <= 14))
          {
            score.append('\t <h2>Find more time for your Happiness</h2></br><h3>You might feel washed out from work.</br>But remember to go easy on yourself. Whatever you do today, let it be enough. Take breaks and do the things that you love. Occasionaly, talk to someone about your work life and feelings.</h3>');
          }
        else if((correct >= 15) && (correct <= 19))
          {
            score.append('\t <h2>Breath in, Breath out.</br></h2></br><h3>Do not bottle up your emotions. Talk to someone immediately about the things that are troubling you. Go easy on yourself and ask for Help. </h3>    ');
          }
        else if((correct >= 20) && (correct <= 27))
        {
          score.append('\t <h2>Seek immediate help from a clinical Psychologist.</h2></br><h3> Remember that there are people who care for you.</h3></br><h2>Contact: absdef@gmail.com</h2></br><h3>We are here for you</h3>');
        }
        return score;
  }
})();
