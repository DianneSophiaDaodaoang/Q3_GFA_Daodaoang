var num1= Math.floor(Math.random() * 20);
document.getElementById("ran1").innerHTML = num1;

var num2= Math.floor(Math.random() * 20);
document.getElementById("ran2").innerHTML =num2;

var num3= Math.floor(Math.random() * 20);
document.getElementById("ran3").innerHTML = num3;


if( num1 >= num2 && num1 >= num3){ 
    document.getElementById("greatest").innerHTML = "The food with the greatest quantity is cake. It has a total of " + num1+".";
}

else if( num2 >= num1 && num2 >= num3){ 
    document.getElementById("greatest").innerHTML = "The food with the greatest quantity is burger. It has a total of " + num2+".";
}

else{
    document.getElementById("greatest").innerHTML = "The food with the greatest quantity is pizza. It has a total of " + num3+".";
}


var letter = num1


switch(letter){
    case 1:
        letter="a";
        break;
    case 2:
        letter="b";
        break;
    case 3:
        letter="c";
        break;
    case 4:
        letter="d";
        break;
    case 5:
        letter="e";
        break;
    case 6:
        letter="f";
        break;
    case 7:
        letter="g";
        break;
    case 8:
        letter="h";
        break;
    case 9:
        letter="i";
        break;
    case 10:
        letter="j";
        break;
    case 11:
        letter="k";
        break;
    case 12:
        letter="l";
        break;
    case 13:
        letter="m";
        break;
    case 14:
        letter="n";
        break;
    case 15:
        letter="o";
        break;
    case 16:
        letter="p";
        break;
    case 17:
        letter="q";
        break;
    case 18:
        letter="r";
        break;
    case 19:
        letter="s";
        break;
    case 20:
        letter="t";
        break;
    default:
        letter= "not known";
        break;
}

document.getElementById("alphabet").innerHTML ="The name of the person who ate the most slices of cake starts with the letter "+ letter+".";


var num = num2*num3;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
document.getElementById("TIME").innerHTML= "The time it took for him/her to finish the slices of cake is: " + rhours + " hour(s) and " + rminutes + " minute(s).";
