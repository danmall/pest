/*
*************************************************

PROGRESSIVELY ENHANCED STOCK TABLE
JavaScript Functions
Requires jQuery

Created by the epic SuperFriendly team.
http://superfriend.ly/

*************************************************
*/


$(document).ready(function() { 
    
    var Site = function(){

        this.init = function(){
            convertTableToGraph();
            this.updateTime();
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
            });
            
        }

        this.updateTime = function(){
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

    };
    
    
    /*-------------------------------------------    
        Initial Actions
    -------------------------------------------*/
        
    var pest = new Site();
    pest.init();

    
    
});


