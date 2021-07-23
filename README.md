# project1
Essential Finance 


## About

A mobile responsive website that can target people who are beginners, intermediate, or experienced with finance and stock. 
It has 3 tabs for teaching basics and finance related topics. Each tab consists of a different way to learn the material,
 through flashcards, quiz, or videos , giving the user a choice of choosing the method of learning that fits best his needs.
Another main tab is the stock news tab, which consists of a form to input a company symbol in order to get daily prices 
(Low, close, open, volume)  and then show the closing price of each month for a yearof that company on a graph. Also that tab contains 
up to date stock related articles.

Used the [Alpha Vantage API](https://www.alphavantage.co/) to retrieve stock related daily data for a specific searched company.And linked it to another api retrieving the monthly closed price of that same company  to be shown in a graph.
Used  [Rapid API](https://rapidapi.com/marketplace)  to retrieve bloomberg market and financial news related to canada.
Used [Coin Lore API](https://www.coinlore.com/cryptocurrency-data-api) to retrieve cryptocurrency data for the ticker .
And included the use of `localStorage` to store  persistent data in the quiz section.


## User Story

```
AS A User
I WANT to see Stock related articles 
SO THAT I stay updated about important news 
```
AS A User
I WANT to search for the stock price of a certain company of my choice
SO THAT I plan my investing choices
```
AS A User
I WANT to know more about finance through flash cards
SO THAT I expand my knowledge in finance related topics
```
AS A User
I WANT to be able to take a quiz related to finance with a highscore tab
SO THAT I challenge my self by solving it and keeping track of my improvements 
```
AS A User
I WANT to have a finance-related videos tab
SO THAT I learn by watching the given videos without the need to search for them 
```

## Acceptance Criteria

```
GIVEN a stock search  with form inputs
WHEN I search for a company by its symbol
THEN I am presented with daily prices (High, Low, Close, Volume) and than get a graph showing the monthly closing price for that company 
WHEN I scroll down in the Stock News tab  
THEN I am presented with articles (picture, title, and summary)from bloomberg related to stock in canada, with the possibility of redirecting to continue reading that article on bloomberg's website
WHEN I press the stat button in Flashcards tab
THEN I am presented a question related to finance and a button to check the answer and then going to the next question
WHEN I start the quiz
THEN I am presented with multiple choice questions related to finance with a timer of 200 sec and a highscore tab to track my improvement
WHEN I click on the video tab
THEN I am presented with 3 different topics that each has multiple videos to watch related to finance
```

# URLS
* The URLs of the deployed applications:  https://saidmg.github.io/essential-finance/
* The URLs of the GitHub repositories  :  https://github.com/saidmg/project1.git

# Sample Pictures
* Screenshots are available inside ./assets/ for more details
![GitHub Logo](/Assets/screenshots/home_screenshot.jpeg)
![GitHub Logo](/Assets/screenshots/stocknews_screenshot.jpeg)
![GitHub Logo](/Assets/screenshots/flashcards_screenshot.JPG)
![GitHub Logo](/Assets/screenshots/quiz_screenshot.JPG)
![GitHub Logo](/Assets/screenshots/videolectures_screenshot.jpeg)
![GitHub Logo](/Assets/screenshots/contact_screenshot.jpeg)

## license 

Copyright <2021> <Team Bravo>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



