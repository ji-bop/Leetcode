const words = s.split(' ');
let counter = 0;
var countSegments = function(s) {
   
    for (let i = 0; i < words.length; i++) {
        counter = counter++;
    }
    
    return counter;
};