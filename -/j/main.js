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

        /*
        var privateGreeting = "hello private";
        this.publicGreeting = "hello public";
    
        var privateMethod = function(whatToSay){ // private
            alert(whatToSay);
        }  

        this.publicMethod = function(whatToSay){ //public
            alert(whatToSay);
        }*/

        this.init = function(){
            //this.saySomething();
        }
        
        this.saySomething = function(){
            alert('yo yo');
        }
    };
    
    
    /*-------------------------------------------    
        Initial Actions
    -------------------------------------------*/
        
    var pest = new Site();
    pest.init();
    
    /*pest.privateMethod('hey nowew'); // doesn't work
    pest.publicMethod('hey nowew'); // works

    console.log(pest.privateGreeting); // doesn't work
    console.log(pest.publicGreeting); //works */

    
    
});


