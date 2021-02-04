var flashcards = [
    {
        question: "What is a pension plan?",
        answer: "A pension plan is a essentially retirement plan and your employer makes a contribution on your behalf. This “pool of cash, of funds” is then available for you once you retire, and you will receive these payments in cash payments." 
    },
    {
        question: "What are assets and liabilities?",
        answer: "Assets are basically anything that has a monetary (or “cash”) value. There is a huge range of assets. There are liquid assets and real assets. Liquid assets mean anything that is either cash or can quickly be converted to cash itself. For example, Canadian cash, a savings/chequing account, stocks, treasury bills and more. Hard assets are physical assets that are not as easy to convert to cash quickly. Examples include a house, a condo, car or land. Liabilities are something that is owed to someone else. This is usually cash, but it can be in other forms, like a service is that is yet to be completed, but it was already paid for. Some examples for liabilities include mortgages, credit card balances, a car loan and a student loan to name a few."


    },

    {
        question: "What are taxes? What are the different forms of taxes for an individual?",
        answer: "Taxes are required financial charges from the government. They charge tax on various goods and services, and then use that tax money collected to pay for important things for society, like building roads and public schools. There are various forms of taxes, which include GST/HST (you see this if you buy a product or service), income taxes (what you pay when you earn income), property taxes (the tax you pay for having a house on land). Check out our taxes flashcard deck to learn more about taxes!  "

    },
    
    {
        question: "What is positive Cash flow? ",
        answer: "A positive cash flow is when the income you are earning is greater than your expenses. This should be the goal that you should strive for to become financially wealthy. Earn more than what you spend and live below your means! "
    },
    {
        question: "What is net income?",
        answer: " Net income is the cash you have after deducting all your expenses and paying your taxes. Often individuals think that the salary they make is their “Income” which is in a sense correct, but your deductions and taxes (i.e. CPP and taxes) must be taken into consideration as well. "

    },
    {
        question: "What is a Line of Credit?",
        answer:"A line of credit is a financial limit of cash that can be used at any time. For example, you can be approved a line of credit of $100,000 from the bank. Think of this as a reserve balance of cash that can be borrowed from the bank when needed. The borrower can borrow up to the limit ( in this case $100,000) and will need to repay the balance, with any applicable interest."
    },
    {
        question: "What is a home equity line of credit?",
        answer: "A home equity line of credit is where you can use the equity you have in your home. To put in simple terms, lets say your house value is $500,000. The mortgage that you owe to the bank is $200,000. The remaining amount of value, $300,000 is called your “home equity.” This equity can then be borrowed from the bank for your own personal use. Of course, by doing so, the balance of your mortgage will go up, and your mortgage payment will as well, so you will have to see if this is worth it or not."
    },
    {
        question: "What is a RRSP?",
        answer: "An RRSP, or a registered retirement savings plan, is a tax deferred investment account that can be used to purchase investment products. Think of it as a wallet, and the coins inside it can be stocks, cash and etc. You can use an RRSP to save for retirement, and it offers a few perks. For one, if you contribute cash to an RRSP, it reduces your taxes for the current year. It also allows you to grow your investments tax free until you withdraw the cash. Once withdrawn, you will have to pay tax. "
    },
    {
        question: "What is a TFSA?",
        answer: "A TFSA, or “tax free savings account”, is another investment account that you can use to invest for your future. This account uses after tax income, which means, unlike an RRSP where you can reduce your taxes when you contribute to your RRSP, a TFSA does not have this feature. However, the special feature about this account is that any gains you get from your investment will be tax free! Imagine buying a stock for $2000 and after a year it goes to $10,000. This will be tax free! "

    },
    
]
var questionNumber = 0;

function getNextQuestion(questionNumber = 0) {
    if (questionNumber > 8) {
    }
    questionBox.innerHTML = "<h3>" + flashcards[questionNumber].question + "</h3>";
    document.querySelector('#answerCheck').style.display = "none"
        setTimeout(function(){
            $('#answerCheck').css('display','block');
             }, 3000);
  }
       


function start(){
    
    document.querySelector('#startBtn').style.display = "none"
    document.querySelector('.flip').style.display = "block"
    // questionBox.innerHTML = "<h3 " + flashcards[questionNumber].question + "</h3>"  
    document.querySelector('#answerCheck').style.display = "none"
   getNextQuestion()
}

function nextQuestion() {
    back ()
    questionNumber += 1;
    getNextQuestion(questionNumber)
    }

  function checkAnswer (){
    result.innerHTML = "<h2>" + flashcards[questionNumber].answer + "</h3>" 
         $('.flip').click(function () {
        $(this).find('.card').addClass('flipped')
       return true;
        });
    }        

    function back (){     
        if (questionNumber<8){
        questionNumber += 1;
        questionBox.innerHTML = "<h3>" + flashcards[questionNumber].question + "</h3>" 
$('.flip').click(function () {
            $(this).find('.card').removeClass('flipped')
            return true;
            });        
 }          
else{ 
    document.querySelector('#backBtn').style.display= "none"
    result.innerHTML = `<a href="stockNews.html" style="margin-top: 25px; width: 300px" class="btn btn-danger id="returnBtn"> Ready for Stock News ? </a>
    <a href="quizz.html" style="margin-top: 25px; width: 300px" class="btn btn-danger id="returnBtn"> More Question ? </a>` 
}
    }
    