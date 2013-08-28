/*
*************************************************

PROGRESSIVELY ENHANCED STOCK TABLE
JavaScript Functions
Requires jQuery

Created by the epic SuperFriendly team.
http://superfriend.ly/

*************************************************
*/

var Site = function(){

    // private
    var _debugMode = false;

    var _currentLeftPos = 0;
    var _currentDotCount = 0;
    var _currentTimeString = '';

    var MAX_HEIGHT_BEFORE_FLIP = 160;

    this.init = function(){
        convertTableToGraph();
        updateTime();
        moveGraph();
        addPoint();
    }
    
    var convertTableToGraph = function(){

        $('.stock-table').addClass('graph-table');
        $('.table-headers').addClass('offscreen');
        $('.share-price').append('<b class="dot phark" />');

        $('.static-page-message').remove();

        // add position to dots
        $('.share-price-num').each(function(n){
            var _vertPos = $(this).text();
            $(this).parents('.share-price').css({
                'left': (n*20)+15 + '%',
                //'top': _vertPos + 'px'
                'bottom': _vertPos - 10 + 'px' 
            });

            if(parseInt(_vertPos) > MAX_HEIGHT_BEFORE_FLIP){
                $(this).parents('.share-price').addClass('flip-tip');
            }

            // updating vars
            _currentLeftPos = (n*20)+15;
            _currentDotCount++;

        });

        $('.time-label').each(function(n){
            $(this).css({
                'left': (n*20)+10 + '%',
            });
        });

        if (_debugMode){
            setInterval(addPoint, 250);
        }else{
            setInterval(addPoint, 5000);
        }
        
    }

    var updateTime = function(){
        setInterval(function(){
            var _currentTime = new Date();
            var _hours = _currentTime.getHours();
            if(_hours <= 12) {
                var _amPm = 'am';                
            }else{
                var _amPm = 'pm';
                _hours -= 12;
            }

            var _minutes = _currentTime.getMinutes();
            if(_minutes < 10){
                _minutes = '0' + _minutes;
            }

            var _seconds = _currentTime.getSeconds();
            if(_seconds < 10){
                _seconds = '0' + _seconds;
            }

            _currentTimeString = _hours + ':' + _minutes + ':' + _seconds + ' ' + _amPm;

            $('.current-time').html(_currentTimeString);

        }, 1000);
    }

    var addPoint = function(){

        var _dollarAmount = Math.ceil(Math.random()*200);
        if(_dollarAmount > MAX_HEIGHT_BEFORE_FLIP){
            var _extraClass = ' flip-tip';
        }else{
            var _extraClass = '';
        }

        var _timestampLeftPos = (_currentDotCount+1)*20;

        $('.stock-table tbody').append('<tr><th class="time-label" scope="row" style="left: ' + (_timestampLeftPos-25) + '%;">' + _currentTimeString + '</th><td class="share-price' + _extraClass + ' new" style="bottom:' + (_dollarAmount-10) + 'px; left: ' + _timestampLeftPos + '%"><span class="share-price-tooltip">$<b class="share-price-num">' + _dollarAmount + '</b></span><b class="dot phark"></b></td></tr>');

        _currentDotCount++;

    }

    var moveGraph = function(){

        if (_debugMode){
            setInterval(function(){
                $('.graph-table').animate({
                    'left': "-=100px"
                }, 500);
            }, 500);
        }else{
            setInterval(function(){
                $('.graph-table').animate({
                    'left': "-=5px"
                }, 500);
            }, 500);
        }

    }

};



/*-------------------------------------------    
    Initial Actions
-------------------------------------------*/

$(document).ready(function() {         
    var pest = new Site();
    pest.init();    
    
});


