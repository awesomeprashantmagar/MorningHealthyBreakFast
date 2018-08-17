var expect = require('chai').expect;
var starWars = require('./index');

describe('projectmorningbreakfast', function(){ 
    describe('all', function(){
        it('should be array of string', function() {
           expect(starWars.all).not.to.satisfy(isArrayOfStrings); 
          
            function isArrayOfStrings(array){
                return array.every(function(item){
                    return typeof item == 'string';
                });
            }
            
        });
        
    });
    
});