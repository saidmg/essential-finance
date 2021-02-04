var questions = [
    {
        question: "What is a pension plan?",
        answers: ["A) plan for you to save money for vacation", "b) To help you save for your child’s education", "c) A retirement plan you and your employer contribute to for when you retire"],
        correct: "c) A retirement plan you and your employer contribute to for when you retire",
        explanation: "A pension plan is a essentially retirement plan and your employer makes a contribution on your behalf. This “pool of cash, of funds” is then available for you once you retire, and you will receive these payments in cash payments." 
    },
    {
        question: "What are assets and liabilities?",
        answers: ["a.)	An asset is anything that has “cash value”. Liabilities are anything that is owed to someone else, at some point in time. ", "b.) An asset is cash that you have in bank. A liability is a promise made to someone ",  "c.) An asset is something that helps you get rich. A liability helps you save money"],
        correct: "a.)	An asset is anything that has “cash value”. Liabilities are anything that is owed to someone else, at some point in time. ",
        explanation: "Assets are basically anything that has a monetary (or “cash”) value. There is a huge range of assets. There are liquid assets and real assets. Liquid assets mean anything that is either cash or can quickly be converted to cash itself. For example, Canadian cash, a savings/chequing account, stocks, treasury bills and more. Hard assets are physical assets that are not as easy to convert to cash quickly. Examples include a house, a condo, car or land. Liabilities are something that is owed to someone else. This is usually cash, but it can be in other forms, like a service is that is yet to be completed, but it was already paid for. Some examples for liabilities include mortgages, credit card balances, a car loan and a student loan to name a few."


    },

    {
        question: "What are taxes? What are the different forms of taxes for an individual?",
        answers: ["a) A tax is something the government gives us. There are different taxes like life tax, Canadian tax, American tax and etc.", "b) A tax is a financial charge from the government for various goods and services. There are many types of tax, which include income tax, property tax, capital gains tax and etc. ", "c)	A tax loan that you can give to friends and family, and they have to pay you back with interest. "],
        correct: "b) A tax is a financial charge from the government for various goods and services. There are many types of tax, which include income tax, property tax, capital gains tax and etc. ",
        explanation: "Taxes are required financial charges from the government. They charge tax on various goods and services, and then use that tax money collected to pay for important things for society, like building roads and public schools. There are various forms of taxes, which include GST/HST (you see this if you buy a product or service), income taxes (what you pay when you earn income), property taxes (the tax you pay for having a house on land). Check out our taxes flashcard deck to learn more about taxes!  "

    },
    
    {
        question: "What is positive Cash flow? ",
        answers: ["a.) when your money is flowing into your chequing and saving accounts ","b.) When the income you earn is higher than the expenses you incur", "c.) when two negative debit balances equal positive (because negative and negative equals positive) "],
        correct:  "b.) When the income you earn is higher than the expenses you incur",
        explanation: "A positive cash flow is when the income you are earning is greater than your expenses. This should be the goal that you should strive for to become financially wealthy. Earn more than what you spend and live below your means! "
    },
    {
        question: "What is net income?",
        answers: ["a.)When you use the “net” method to increase your income ","b.) The cash you have after deducting your expenses and paying your taxes ","c.) your expenses exceed your income, then it is net income"],
        correct: "b.) The cash you have after deducting your expenses and paying your taxes ",
        explanation: " Net income is the cash you have after deducting all your expenses and paying your taxes. Often individuals think that the salary they make is their “Income” which is in a sense correct, but your deductions and taxes (i.e. CPP and taxes) must be taken into consideration as well. "

    },
    {
        question: "What is a Line of Credit?",
        answers: ["A.) Money that you earned as credit from the bank ","B.) a financial limit of cash that can be used at any time from a bank. ","C.) Cash used only to invest into real estate"],
        correct: "B.) a financial limit of cash that can be used at any time from a bank. ",
        explanation:"A line of credit is a financial limit of cash that can be used at any time. For example, you can be approved a line of credit of $100,000 from the bank. Think of this as a reserve balance of cash that can be borrowed from the bank when needed. The borrower can borrow up to the limit ( in this case $100,000) and will need to repay the balance, with any applicable interest."
    },
    {
        question: "What is a home equity line of credit?",
        answers: ["a) Money used to buy homes only, anything else would be illegal", "b) A type of stock investment that you can use to buy houses","c) A form of line of credit that can be used with the equity from your house value "],
        correct: "C) A form of line of credit that can be used with the equity from your house value",
        explanation: "A home equity line of credit is where you can use the equity you have in your home. To put in simple terms, lets say your house value is $500,000. The mortgage that you owe to the bank is $200,000. The remaining amount of value, $300,000 is called your “home equity.” This equity can then be borrowed from the bank for your own personal use. Of course, by doing so, the balance of your mortgage will go up, and your mortgage payment will as well, so you will have to see if this is worth it or not."
    },
    {
        question: "What is a RRSP?",
        answers: ["a.) Something that you need to pay back to the government with interest", "b.) It is a tax deferred investment account and its purpose is to help save for retirement  ", "c.) Used as an investment account to buy more Real estate rental properties "],
        correct: "b.) It is a tax deferred investment account and its purpose is to help save for retirement  ",
        explanation: "An RRSP, or a registered retirement savings plan, is a tax deferred investment account that can be used to purchase investment products. Think of it as a wallet, and the coins inside it can be stocks, cash and etc. You can use an RRSP to save for retirement, and it offers a few perks. For one, if you contribute cash to an RRSP, it reduces your taxes for the current year. It also allows you to grow your investments tax free until you withdraw the cash. Once withdrawn, you will have to pay tax. "
    },
    {
        question: "What is a TFSA?",
        answers: ["a.)	Money that is used to help people purchase cars or houses","b.) An investment account that is used to grow your investments tax free ","c.) Investment will be taxed when you sell your investments"],
        correct: "b.) An investment account that is used to grow your investments tax free ",
        explanation: "A TFSA, or “tax free savings account”, is another investment account that you can use to invest for your future. This account uses after tax income, which means, unlike an RRSP where you can reduce your taxes when you contribute to your RRSP, a TFSA does not have this feature. However, the special feature about this account is that any gains you get from your investment will be tax free! Imagine buying a stock for $2000 and after a year it goes to $10,000. This will be tax free! "

    },
    
]


var start = document.querySelector("#start");
var quizPage = document.querySelector("#quizPage");
var questionBox = document.querySelector("#questionBox");
var result = document.querySelector("#result");
var questionNumber = 0;
var arraytest = []
var userSelection;

function next(){
    $('.flip').click(function () {
        $(this).find('.card').addClass('flipped')
        return true;
    });
    checkAnswer();
}
function back (){
    $('.flip').click(function () {
        $(this).find('.card').removeClass('flipped')
        return true;
    });
    
}

function startQuiz() {
    start.style.display = "none";
    quizPage.style.display = "block"
    getNextQuestion(questionNumber);
    
}

function getNextQuestion(questionNumber = 0) {
    if (questionNumber > 8) {
        return;
    }
    else{ 
        // document.querySelector('#nextBtn').style.display = "none"
        questionBox.innerHTML += '<button id="homeBtn"> Return Home Page </button>'
    }

    questionBox.innerHTML = "<h3 style='color:black'>" + questions[questionNumber].question + "</h3>";
    var answers = questions[questionNumber].answers;

    for (var i = 0; i < answers.length; i++) {
        var answer = answers[i]

        questionBox.innerHTML += `<button id='${i}' onClick="getUserSelection(event,'${answer}','${i}')" class="btn btn-info" style="margin:5px;width: 500px;border-radius:15px">${answer}</button></br>`;
    }
}

function getUserSelection(event, answer, correctId) {
    event.preventDefault();
    userSelection = answer;
    buttonCover(correctId);
    checkAnswer(event, userSelection, correctId);

}

function checkAnswer(event, userSelection) {
    // event.preventDefault();

    if (questions[questionNumber].correct === userSelection) {
        result.innerHTML="Correct!"
    } else {
        var explanation = questions[questionNumber].explanation;
        result.innerHTML = "Wrong! </br>"+ explanation;
    }

}

 
function buttonCover(selectedButtonId){
    for (var i = 0; i < 3; i++) {
        var selectedAnswer = document.getElementById(i);
            if(selectedButtonId == i){
                selectedAnswer.classList.add("btn-success");
                selectedAnswer.classList.remove("btn-info"); 
            }else{
                selectedAnswer.classList.add("btn-info");
                selectedAnswer.classList.remove("btn-success");  
            }
    }
}

function nextQuestion() {
    back ()
    questionNumber += 1;
    getNextQuestion(questionNumber)
}




function getTimer() {
    timerArea.textContent = gameFinishTime;
    timeIntervalObj = setInterval(timeDecrease, 1000);
}

function timeDecrease(byvalue = 1) {
    gameFinishTime -= byvalue;
    if (gameFinishTime <= 0) {
        gameFinishTime = 0;
        finishGame();
    }
    timerArea.textContent = gameFinishTime;
}

function finishGame() {
    questionBox.innerHTML = "Player Name:<input id='playerName' type='text'></input> </br><button id='saveBtn' class='btn btn-primary' onClick='save(event)'>Save</button>";
    clearInterval(timeIntervalObj);
}
function save(event) {

    event.preventDefault()
    

    if (localStorage.getItem("arraytest")) {


        var x = localStorage.getItem('arraytest')
        arraytest = JSON.parse(x)
    }

    while (document.getElementById("listid")) {
        document.getElementById('listid').remove()


    }


    playerName = document.getElementById('playerName').value
    arraytest.push({ 'quiz': { 'name': `${playerName}`, 'score': `${timerArea.textContent}` } });
    localStorage.setItem('arraytest', JSON.stringify(arraytest));
    var retrievedObject = localStorage.getItem('arraytest');
    var jason = JSON.parse(retrievedObject)




    for (var i = 0; i < jason.length; i++) {
        var score = jason[i].quiz.score;
        var name = jason[i].quiz.name;

        const li = document.createElement('li')
        li.setAttribute('class', 'list-group-item')
        li.setAttribute('id', 'listid')
        li.textContent = `${name}  : ${score} pts`
        document.getElementById('list').appendChild(li);
    }

}
