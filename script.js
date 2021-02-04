
      // Detect request animation frame
      var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

var stockN
async function getData() {
    // if(!city){
    // }
    // city = document.querySelector('.me-2').value
    stockN = document.getElementById('stockName').value 
    apiurl1 = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockN}&apikey=T7LHA4F7LBUKYZBC`

    // get the movie information
    console.log(`... getting data info for that company`)
    weatherWeekly = await fetch(apiurl1).then(r => r.json())
    console.log(`${weatherWeekly}`)
    getDateFormat()
    // weatherWeekly["Time Series (Daily)"]["2021-02-01"]["1. open"]
    document.getElementById("dateOfOutput").innerText  =`Daily Prices (${weatherWeekly["Meta Data"]["3. Last Refreshed"]})`
    document.getElementById("lastRefreshed").innerText = `Company: ${weatherWeekly["Meta Data"]["2. Symbol"]} `
    document.getElementById("yesterdayHigh").innerText = `High: ${weatherWeekly["Time Series (Daily)"][yearMonth]["2. high"]}`
    document.getElementById("yesterdayLow").innerText = `Low: ${weatherWeekly["Time Series (Daily)"][yearMonth]["3. low"]}`
    document.getElementById("yesterdayClose").innerText = `Close: ${weatherWeekly["Time Series (Daily)"][yearMonth]["4. close"]}`
    document.getElementById("yesterdayVolume").innerText = `Volume: ${weatherWeekly["Time Series (Daily)"][yearMonth]["5. volume"]}`
    loadScript()
}


async function loadScript(){

    var script = document.createElement("script")
    script.type = "text/javascript";
    script.src = "https://www.shieldui.com/shared/components/latest/js/shieldui-all.min.js";
    document.getElementsByTagName("head")[0].appendChild(script);
}
// loadScript()
var test
async function getGraphValues(){
test  = await fetch("https://www.alphavantage.co/query?function=HT_TRENDLINE&symbol=IBM&interval=monthly&series_type=close&apikey=5LCI0OK5JDSBLKCF").then(r => r.json())
var month1= test["Technical Analysis: HT_TRENDLINE"]['2020-03-31'].HT_TRENDLINE
var month2= test["Technical Analysis: HT_TRENDLINE"]['2020-04-30'].HT_TRENDLINE
var month3= test["Technical Analysis: HT_TRENDLINE"]['2020-05-29'].HT_TRENDLINE
var month4= test["Technical Analysis: HT_TRENDLINE"]['2020-06-30'].HT_TRENDLINE
var month5= test["Technical Analysis: HT_TRENDLINE"]['2020-07-31'].HT_TRENDLINE
var month6= test["Technical Analysis: HT_TRENDLINE"]['2020-08-31'].HT_TRENDLINE
var month7= test["Technical Analysis: HT_TRENDLINE"]['2020-09-30'].HT_TRENDLINE
var month8= test["Technical Analysis: HT_TRENDLINE"]['2020-10-30'].HT_TRENDLINE
var month9= test["Technical Analysis: HT_TRENDLINE"]['2020-11-30'].HT_TRENDLINE
var month10= test["Technical Analysis: HT_TRENDLINE"]['2020-12-31'].HT_TRENDLINE
var month11= test["Technical Analysis: HT_TRENDLINE"]['2021-01-29'].HT_TRENDLINE
var month12= test["Technical Analysis: HT_TRENDLINE"]['2021-02-03'].HT_TRENDLINE

console.log(x)
}
jQuery(function ($) {
    var data1 = [12, 3, 4, 2, 12, 3, 4, 17, 22, 34, 54, 67];
    $("#chart1").shieldChart({
        exportOptions: {
            image: false,
            print: false
        },
        axisY: {
            title: {
                text: "Break-Down for selected quarter"
            }
        },
        dataSeries: [{
            seriesType: "line",
            data: data1
        }]
    });
});

var yearMonth
var dayyy
function getDateFormat(){
    yearMonth = moment().format("Y-MM");
    
    if ((moment().subtract(1, 'days')["_d"]["getDay"]())<10)
     {dayyy=`0${moment().subtract(1, 'days')["_d"]["getDay"]()}`}
    else{dayyy =`${moment().subtract(1, 'days')["_d"]["getDay"]()}`}
    yearMonth += `-${dayyy}`

}



var cardArticle
async function getArticles() {
    // if(!city){
    // }
    // city = document.querySelector('.me-2').value
    cardArticle =await fetch("https://bloomberg-market-and-financial-news.p.rapidapi.com/news/list-by-region?id=canada-home-v3", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "12e0f77afemsh27668cabe689162p1969a8jsn17bbb5448fc6",
            "x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com"
        }
    }).then(r => r.json())
 
    console.log(`${cardArticle}`)
    for(var i =0 ; i <3 ; i++){

    document.getElementById(`title${i+1}`).innerText = cardArticle.modules[1].stories[i].title
    document.getElementById(`thumbNail${i+1}`).setAttribute("src", cardArticle.modules[1].stories[i].thumbnailImage)
    document.getElementById(`summary${i+1}`).innerHTML = cardArticle.modules[1].stories[i].autoGeneratedSummary
    }    
}
// getArticles()

var cryptocurrency
var cryptoRank
var cryptoName
var cryptoPercentageChange1H
var cryptoPriceUSD
var sentence =""
var idDesicion
var arrowDestination
async function getcrypto() {
    // if(!city){
    // }
    // city = document.querySelector('.me-2').value
    // <span></span>
    cryptocurrency =await fetch("https://api.coinlore.net/api/tickers/?start=0&limit=20").then(r => r.json())
    console.log(` .. fetched info: `, cryptocurrency)
    console.log(`${cryptocurrency}`)
    for(var l=0 ; l <15 ; l++){
    cryptoRank = cryptocurrency.data[l]["rank"]
    cryptoName = cryptocurrency.data[l]["name"]
    cryptoPercentageChange1H = cryptocurrency.data[l]["percent_change_1h"]
    cryptoPriceUSD = cryptocurrency.data[l]["price_usd"]
    if(Math.sign (cryptocurrency.data[l]["percent_change_1h"])>0){console.log('bigger'); idDesicion ="positive" ;arrowDestination='&uarr;' }
    else if(Math.sign (cryptocurrency.data[l]["percent_change_1h"])==0){console.log('equal'); idDesicion ="zeroo"}
    else {console.log('Less'); idDesicion ="negative" ;arrowDestination= '&darr;'}
    sentence += `${cryptoName}<span id=${idDesicion}> ${arrowDestination}  ${cryptoPercentageChange1H}%</span> &#8652; ${cryptoPriceUSD} $  <span id="barrier">&#10074;</span> `}
    document.querySelector('.marquee-content-items').innerHTML = sentence
    }    
    // getcrypto()


    $(function (){
    
        /* Example options:
        
            let options = {
                autostart: true,
                property: 'value',
                onComplete: null,
                duration: 20000,
                padding: 10,
                marquee_class: '.marquee',
                container_class: '.simple-marquee-container',
                sibling_class: 0,
                hover: true,
                velocity: 0.1
                direction: 'right'
            }
            $('.simple-marquee-container').SimpleMarquee(options);
            
        */

        $('.simple-marquee-container').SimpleMarquee();
        
    });

    // ---------------------------------
        // ---------- SimpleMarquee ----------
        // ---------------------------------
        //Copyright (C) 2016  Fabian Valle 
        //An easy to implement marquee plugin. I know its easy because even I can use it.
        //Forked from: https://github.com/conradfeyt/Simple-Marquee
        //Re-Written by: Fabian Valle (www.fabian-valle.com) (www.obliviocompany.com)
        // 
        // ------------------------
        // Structure //
        //
        //  *********************************** - marque-container - *************************************
        //  *                                                                                            *
        //  *   ******************************* ******************************************************   *
        //  *   *                             * *                                                    *   *
        //  *   * - marquee-content-sibling - * *                 - marquee-content -                *   *
        //  *   *                             * *                                                    *   *
        //  *   ******************************* ******************************************************   *
        //  *                                                                                            *
        //  **********************************************************************************************
        //
        //// Usage //
        //  
        //    Only need to call the createMarquee() function,
        //    if desired, pass through the following paramaters:
        //
        //    $1 duration:                   controls the speed at which the marquee moves
        //
        //    $2 padding:                    right margin between consecutive marquees. 
        //
        //    $3 marquee_class:             the actual div or span that will be used to create the marquee - 
        //                                   multiple marquee items may be created using this item's content. 
        //                                   This item will be removed from the dom
        //
        //    $4 container_class:           the container div in which the marquee content will animate. 
        //
        //    $5 marquee-content-sibling :   (optional argument) a sibling item to the marqueed item  that 
        //                                   affects the end point position and available space inside the 
        //                                   container. 
        //
        //    $6 hover:                     Boolean to indicate whether pause on hover should is required. 
        
        ;(function ($, window, document, undefined){
            var pluginName = 'SimpleMarquee';
        
            function Plugin (element, options) {
                this.element = element;
                this._name = pluginName;
                this._defaults = $.fn.SimpleMarquee.defaults;
                this.settings = $.extend( {}, this._defaults, options );
                this.marqueeSpawned = [];
                this.marqueeHovered = false;
                this.documentHasFocus = false;        
                //
                this.counter = 0;
        
                this.timeLeft = 0;
                this.currentPos = 0;
                this.distanceLeft = 0;
                this.totalDistance = 0;
                this.contentWidth = 0;
                this.endPoint = 0;
                this.duration = 0;
                this.hovered = false;
                this.padding = 0;
                
                
                this.init();
            }
            function marqueeObj(newElement){
                this.el=newElement;
                this.counter=0;
                this.name="";
                this.timeTop=0;
                this.currentPos=0;
                this.distanceTop=0;
                this.totalDistance=0;
                this.contentWidth=0;
                this.endPoint=0;
                this.duration=0;
                this.hovered=false;
                this.padding=0;
            }
            //methods for plugin
            $.extend(Plugin.prototype, {
        
                // Initialization logic
                init: function () {
                    this.buildCache();
                    this.bindEvents();
                    var config = this.settings;
                    //init marquee
                    if($(config.marquee_class).width() == 0){
                        console.error('FATAL: marquee css or children css not correct. Width is either set to 0 or the element is collapsing. Make sure overflow is set on the marquee, and the children are postitioned relatively');
                        return;
                    }
            
                    if(typeof $(config.marquee_class) === 'undefined'){
                        console.error('FATAL: marquee class not valid');
                        return;
                    }
            
                    if(typeof $(config.container_class) === 'undefined'){
                        console.error('FATAL: marquee container class not valid');
                        return;
                    }
            
                    if(config.sibling_class != 0 && typeof $(config.sibling_class) === 'undefined'){
                        console.error('FATAL: sibling class container class not valid');
                        return;
                    }
                    
                        if (config.autostart)
                        {
                            this.documentHasFocus = true;
                        }
                    //create the Marquee
                    this.createMarquee();
                },
        
                // Remove plugin instance completely
                destroy: function() {
                    this.unbindEvents();
                    this.$element.removeData();
                },
        
                // Cache DOM nodes for performance
                buildCache: function () {
                    this.$element = $(this.element);
                },
        
                // Bind events that trigger methods
                bindEvents: function() {
                    var plugin = this;
                    $(window).on('focus',function(){
                        plugin.documentHasFocus = true;
                        for (var key in plugin.marqueeSpawned){
                            plugin.marqueeManager(plugin.marqueeSpawned[key]);   
                            } 
                    });
                    $(window).on('blur',function(){
                        plugin.documentHasFocus = false;
                        for (var key in plugin.marqueeSpawned){
                            plugin.marqueeSpawned[key].el.clearQueue().stop(); 
                            plugin.marqueeSpawned[key].hovered = true;
                        }
                    });
        
                },
        
                // Unbind events that trigger methods
                unbindEvents: function() {
                    $(window).off('blur focus');
                },
                getPosition: function(elName){
                    var plugin = this;
                    var config = plugin.settings;
                    this.currentPos = parseInt($(elName).css(config.direction));
                    return this.currentPos;
                },
                createMarquee: function(){
                    var plugin = this;
                    var config = plugin.settings;
                    var marqueeContent =  $(config.marquee_class).html();
                    var containerWidth = $(config.container_class).width();
                    var contentWidth = $(config.marquee_class).width();
                    
                    var widthToIgnore = 0;
                    if (config.sibling_class != 0){ 
                        widthToIgnore = $(config.sibling_class).width();
                    } 
                    
                    var spawnAmount = Math.ceil(containerWidth / contentWidth);
                    
                    $(config.marquee_class).remove();
        
                    if(spawnAmount<=2){
                        spawnAmount = 3;
                    } else {
                      spawnAmount++;
                    }
        
                    var totalContentWidth = (contentWidth + config.padding)*spawnAmount;
        
                    var endPoint = -(totalContentWidth - containerWidth);
        
                    var totalDistance =  containerWidth - endPoint;
                    
                                            
                    if (config.velocity !== 0 ) {
                        config.duration = totalDistance / config.velocity;
                    }
                    
                    for (var i = 0; i < spawnAmount; i++) {
                        
                        var newElement = false;
                        
                        if(config.hover == true){
        
                          
                          newElement = $('<div class="marquee-' + (i+1) + '">' + marqueeContent + '</div>')        
                          .mouseenter(function() {
        
        
                            if ((plugin.documentHasFocus == true) && (plugin.marqueeHovered == false)){
                              plugin.marqueeHovered = true;
        
                              for (var key in plugin.marqueeSpawned){
                                plugin.marqueeSpawned[key].el.clearQueue().stop(); 
                                plugin.marqueeSpawned[key].hovered = true;
                              }
                              
        
                            }
        
                          })
                          .mouseleave(function() {
        
        
                              if ((plugin.documentHasFocus == true) && (plugin.marqueeHovered == true)){
        
                                for (var key in plugin.marqueeSpawned){
                                  plugin.marqueeManager(plugin.marqueeSpawned[key]);   
                                } 
        
                                plugin.marqueeHovered = false;
                              } 
                          });
        
                        } else {
        
                          newElement = $('<div class="marquee-' + (i+1) + '">' + marqueeContent + '</div>') ;   
        
                        }
        
                        plugin.marqueeSpawned[i] = new marqueeObj(newElement);
        
                        $(config.container_class).append(newElement);
        
                        plugin.marqueeSpawned[i].currentPos = (widthToIgnore + (contentWidth*i))+(config.padding*i);  //initial positioning
                        plugin.marqueeSpawned[i].name = '.marquee-'+(i+1); 
        
                        plugin.marqueeSpawned[i].totalDistance = totalDistance;  
                        plugin.marqueeSpawned[i].containerWidth = containerWidth;  
                        plugin.marqueeSpawned[i].contentWidth = contentWidth;  
                        plugin.marqueeSpawned[i].endPoint = endPoint;  
                        plugin.marqueeSpawned[i].duration = config.duration;  
                        plugin.marqueeSpawned[i].padding = config.padding;  
        
                        plugin.marqueeSpawned[i].el.css(config.direction, plugin.marqueeSpawned[i].currentPos+config.padding +'px'); //setting left according to postition
        
                         if (plugin.documentHasFocus == true){
                          plugin.marqueeManager(plugin.marqueeSpawned[i]);
                        }
        
                    }
                    //end for
                    
                    if(document.hasFocus()){
                         plugin.documentHasFocus = true;
                    }else{
                        plugin.documentHasFocus = false;
                    }
                    
                },
                marqueeManager: function(marqueed_el){
                    var plugin = this;
                    var elName = marqueed_el.name;
                    var config = plugin.settings;
                    
                    if (marqueed_el.hovered == false) { 
        
                        if (marqueed_el.counter > 0) {  //this is not the first loop
                          
                              marqueed_el.timeLeft = marqueed_el.duration;
                              marqueed_el.el.css(config.direction, marqueed_el.containerWidth +'px'); //setting margin 
                              marqueed_el.currentPos = marqueed_el.containerWidth; 
                              marqueed_el.distanceLeft = marqueed_el.totalDistance - (marqueed_el.containerWidth - plugin.getPosition(elName));
        
                        } else {    // this is the first loop
                          
                          marqueed_el.timeLeft = (((marqueed_el.totalDistance - (marqueed_el.containerWidth - plugin.getPosition(elName)))/ marqueed_el.totalDistance)) * marqueed_el.duration;
                        }
        
                    } else {
                          marqueed_el.hovered = false;
                          marqueed_el.currentPos = parseInt(marqueed_el.el.css(config.direction));
                          marqueed_el.distanceLeft = marqueed_el.totalDistance - (marqueed_el.containerWidth - plugin.getPosition(elName));
                          marqueed_el.timeLeft = (((marqueed_el.totalDistance - (marqueed_el.containerWidth - marqueed_el.currentPos))/ marqueed_el.totalDistance)) * marqueed_el.duration;
                    }
        
                    plugin.marqueeAnim(marqueed_el);
                },
                marqueeAnim: function(marqueeObject){
                    var plugin = this;
                    var config = plugin.settings;
                    marqueeObject.counter++;
                    marqueeObject.el.clearQueue().animate(
                            {[config.direction]: marqueeObject.endPoint+'px'}, 
                            marqueeObject.timeLeft, 
                            'linear', 
                            function(){
                                plugin.marqueeManager(marqueeObject);
                            });
                },
                callback: function() {
                    // Cache onComplete option
                    var onComplete = this.settings.onComplete;
        
                    if ( typeof onComplete === 'function' ) {
                        onComplete.call(this.element);
                    }
                }
        
            });
            //end methods for plugin
            
            $.fn.SimpleMarquee = function (options) {
                this.each(function() {
                    if ( !$.data( this, "plugin_" + pluginName ) ) {
                        $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
                    }
                });
                return this;
            };
            $.fn.SimpleMarquee.defaults = {
                autostart: true,
                property: 'value',
                onComplete: null,
                duration: 50000,
                padding: 10,
                marquee_class: '.marquee',
                container_class: '.simple-marquee-container',
                sibling_class: 0,
                hover: true,
                velocity: 0,
                direction: 'left'
            };
            
        })( jQuery, window, document );