//Challenge 1: Your Age Days
function ageInDays(){
    var birthYear= prompt('WHat year were you born?');
    var ageInDayss=((2021-birthYear)*365);
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('You are ' + ageInDayss + 'days Old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);


}

function reset(){
    document.getElementById('ageInDays').remove();
}