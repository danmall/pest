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
    var _currentLeftPos = 0;
    var _currentDotCount = 0;

    this.init = function(){
        convertTableToGraph();
        updateTime();
        moveGraph();
        //addPoint();
    }
    
    var convertTableToGraph = function(){

        $('.stock-table').addClass('graph-table');
        $('.table-headers').addClass('offscreen');
        $('.share-price').addClass('phark');

        $('.static-page-message').remove();

        // add position to dots
        $('.share-price-num').each(function(n){
            var _topPos = $(this).text();
            $(this).parents('.share-price').css({
                'left': (n*20)+15 + '%',
                'top': _topPos + 'px'
            });

            // updating vars
            _currentLeftPos = (n*20)+15;
            _currentDotCount = n;

        });
        
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
            var _seconds = _currentTime.getSeconds();
            if(_seconds < 10){
                _seconds = '0' + _seconds;
            }

            $('.current-time').html(_hours + ':' + _currentTime.getMinutes() + ':' + _seconds + ' ' + _amPm);
        }, 1000);
    }

    var addPoint = function(){

        $('.stock-table tbody').append('<tr><th class="time-label" scope="row">6:19:10 <abbr title="Ante Meridien">am</abbr></th><td class="share-price">$<span class="share-price-num">104</span></td></tr>');

    }

    var moveGraph = function(){

        setInterval(function(){
            $('.graph-table').animate({
                'left': "-=5px"
            }, 500);
        }, 500);
    }

};



/*-------------------------------------------    
    Initial Actions
-------------------------------------------*/

$(document).ready(function() {         
    var pest = new Site();
    pest.init();    
    
});


