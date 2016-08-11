
var x1 = 0; 
var y1 = 0;
var startCoords = alert ( "Start coordinates are:A("+x1+","+y1+")" );
var x2 = prompt ( "Write the 'x' coordinate" );
var y2 = prompt ( "Write the 'y' coordinate" );

var result=alert ( "Your coordinates are :B(" + x2 + "," + y2 + ").\n" +
  "The distance between points A("+x1+","+y1+")and B("+x2+","+y2+")"+
  " is :\n"+(x2-x1)+" -by 'X'\n"+(y2-y1)+" -by 'Y'");


//---------------------------------------------------------------------------

/*var name= prompt ("Enter your name","");
var time= prompt("Enter the time", "");
var place= prompt("Enter the place","");
var event= prompt("Enter the type of event","");

alert(name+" has a "+ event +" today at "+time+ " somewhere in " +place);

*/
//----------------------------------------------------------------------------
/*
for(var i = 1;i <= 10; ++i) 
{
    for(var j = 1; j <= i; ++j)
        document.write(' '+"#"+' '); 
    document.write('<br>'); 
};
*/
//---------------------------------------------------------------------------
/*
var hash ="# # # # #"
var i=1;
while (i<8)
{
 if (!(i % 2)) {
      console.log(' ' + hash);
    } else {
      console.log(hash);
}
i++;
}
*/
//---------------------------------------------------------------------------
/*
var rand =Math.round(Math.random()*100);
alert(rand);


while (ask!=rand) {
var ask = prompt ("Please guess the number from 1 to 100"); 

if (rand>ask) {
	alert("Our number is higher, try again");
	
}
else if (rand<ask) {
	alert("Our number is lower, try again");
	
}

else {
  alert("You win");
}
}
*/