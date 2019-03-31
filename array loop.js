/*var visitorsName=["hamid","rashid","shakeel"];
 var number=prompt("enter your number.")
 if (number==0) {
 alert("visitors name " + visitorsName[number]);
 };

 if (number==1){
 alert("visitors name " + visitorsName[number])
 };

 if (number==2){
 alert("visitors name " + visitorsName[number])
 };
 if (number>2){
 alert("sorry!")
 }*/


/*if statement nested*/

/*var name = prompt("Enter your name.");
 var age = prompt("Enter your age.");
 var nationality = prompt("Enter your nationality.");
 if (name === "kashif") {
 if (age == 25) {
 if (nationality === "pakistani") {
 alert("Identity confirmed.")
 }
 }
 }
 else {
 alert("Identity not confirmed.")
 }
 ;*/


/*Array*/

/*
 var subjectType = prompt("Enter subject type(singular or plural)");
 var subject = prompt("Enter a subject.");
 var verb = prompt("Enter a verb.");
 var object = prompt("Enter an object.");
 var tense = prompt("Enter a tense.");
 var sub = ["he", "she", "it"];
 var helpVerb = ["is", "are", "am"]
 if (subject === sub[0], sub[1], sub[2] && subjectType === "singular" && tense === "present indefinite") {

 verb1 = verb + "s"
 }
 else {
 verb1 = verb
 }
 alert(subject + " " + verb1 + " " + object + ".");
 */

/*adding and deleting information*/

/*var identity=["hamid","moavia","sameer"];
 var name=prompt("Enter your name.");
 for (var i=0;i<=2;i++){
 if(name===identity[i]){
 alert("identity confirmed.")
 break
 }
 else{
 alert("sorry.")
 }
 }
 */

/*var identity=["hamid","moavia","sameer"];
 var name=prompt("Enter your name.");
 if(name===identity[0],identity[1], identity[2]){
 alert("identity confirmed.")

 }
 else{
 alert("sorry.")
 }
 */

/*alphabatics*/
/*var order=prompt("enter a number less than 12.")
 var alphabates=["a","b","c","d","e","f","i","j","k","l","m","n"];
 alert("your alphabate is "+alphabates[order]);*/


/*your star*/

/*var date=prompt("Please enter your date of birth.");
 var month = prompt("please enter your month of birth.");
 var zodiac=["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];
 var zodiacDates=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
 var zodiacMonth=["january","February","March","April","May","June","July","August","september","October","November","December"];
 var match=false;
 for (var i=0;i<=31;i++){
 for (var j=0;j<=12;j++){
 if (date=zodiacDates[i]&& month===zodiacMonth[j]){
 match=true; alert("Your zodia sign is "+zodiac[j])
 break
 }

 }
 }
 if(match===false){
 alert("sorry.")
 }*/


/* Student Result*/
/*var studentNames = ["hamid", "rashid", "shakeel", "sameer", "masroor", "bilal"];
 var yourName = prompt("Please enter your name.")
 yourName=yourName.toLowerCase()
 var match = false;
 for (var i = 0; i <= 5; i++) {
 if (yourName === studentNames[i]) {
 match = true;
 alert("Passed")
 break

 };
 }
 if (match === false) {
 alert("Faild")
 };*/

/*from chapter 20*/

/*
 for (var i = 1; i < 51; i++) {
 var hello = i % 3;
 var world = i % 5;
 if (hello == 0 && world == 0) {
 document.write("<h1>Hello World</h1>")
 }
 else if (world == 0) {
 document.write("<h1>World</h1>")
 }
 else if (hello == 0) {
 document.write("<h1>Hello</h1>")
 }
 else{
 document.write("<h1></h1>"+"<b>"+i)

 }

 }
 ;


 /*
 var myName="Hamid";
 var firstCh=myName.slice(2,4);
 alert(firstCh);



 var monthName=prompt("Enter a month name.");
 var monthCharacters=monthName.length;
 if(monthCharacters>3){
 month=monthName.slice(0,3);alert(month)
 };
 */


/*var textEnter = prompt("Enter your sentence.");
 var firstCharacter = textEnter.slice(0, 1);
 firstCharacter = firstCharacter.toUpperCase();
 var remainingCharacter = textEnter.slice(1);
 remainingCharacter = remainingCharacter.toLowerCase();
 var text = document.write(firstCharacter + remainingCharacter);*/


/*
 var text=prompt("Enter some text.");
 text=text.toLocaleLowerCase();
 var textLength=text.length;
 for (var i=0;i<textLength;i++){
 if(text.slice(i,i+5)==="hamid"){
 document.write("its me.")
 }

 else{
 document.write("thats not you.")
 }
 break
 }

 */


/*
 Time Between two dates*/
/*
 var alphabates = ["d", "c", "r", "e"]
 var string = prompt("Enter a sentance.");
 string = string.toLowerCase();
 for (var i = 0; i < string.length; i++) { for (var j= 0; j<5;j++) {


 if (string.charAt(i) === alphabates[j]) {
 alert("your alphabate  found.")
 break
 }
 else{
 alert("your alphabate not found.")
 }
 break
 }


 };
 */


/*
 var birthYear = prompt("Enter your birth year.");
 var birthMonth = prompt("Enter your birth month in number.");
 var birhdate = prompt("Enter your date of birth.");
 var currentYear = new Date().getFullYear();
 var currentMonth = new Date().getMonth();
 var currentDate = new Date().getDate();
 var yourageYears = (currentYear - birthYear)-1;
 var yourageMonths = ((12-birthMonth)+currentMonth);
 var yourageDays = ((30-birhdate)+currentDate);
 alert(yourageYears + " " + "Years" + " " + yourageMonths+" "+"Months"+" "+yourageDays+" "+"Days");
 */

/*
 var yourBirthDate = prompt("Enter a Date.");
 yourBirthDate = yourBirthDate.toString();
 var date1 = new Date().getTime();
 var date2 = new Date(yourBirthDate).getTime();
 var diffDate = Math.round((date1-date2)/(1000*60*60*24*360));
 document.write("<h1>"+"your age is"+" "+diffDate+"</h1>");


 var Aquarius = {
 from1:21,
 from2:"Jan",
 to1 : 19,
 to2 : "Feb",
 }
 */



/*var dateOfBirth = prompt("Please enter your date of birth.");
 dateOfBirth = dateOfBirth.toString();
 var date = new Date(dateOfBirth).getDate();
 var month = (new Date(dateOfBirth).getMonth()) + 1;
 if ((month == 1 && date > 20) || (month == 2 && date < 20)) {
 alert("Your star is Aquarius.")
 }
 else if ((month == 2 && date > 19) || (month == 3 && date < 21)) {
 alert("Your star is Pisces.")
 }
 else if ((month == 3 && date > 20) || (month == 4 && date < 21)) {
 alert("Your star is Aries.")
 }
 else if ((month == 4 && date > 20) || (month == 5 && date < 22)) {
 alert("Your star is Taurus.")
 }
 else if ((month == 5 && date > 21) || (month == 6 && date < 22)) {
 alert("Your star is Gemini.")
 }
 else if ((month == 6 && date > 21) || (month == 7 && date < 23)) {
 alert("Your star is Cancer.")
 }
 else if ((month == 7 && date > 22) || (month == 8 && date < 23)) {
 alert("Your star is Leo.")
 }
 else if ((month == 8 && date > 22) || (month == 9 && date < 23)) {
 alert("Your star is Virgo.")
 }
 else if ((month == 9 && date > 22) || (month == 10 && date < 23)) {
 alert("Your star is Libra.")
 }
 else if ((month == 10 && date > 22) || (month == 11 && date < 22)) {
 alert("Your star is Scorpio.")
 }
 else if ((month == 11 && date > 21) || (month == 12 && date < 22)) {
 alert("Your star is Sagittarius.")
 }
 else if ((month == 12 && date > 21) || (month == 1 && date < 21)) {
 alert("Your star is Capricorn.")
 }
 else{
 alert("Enter correct date.")
 };*/


/*function horoscope() {
 var dateOfBirth = prompt("Enter your date of birth.");
 dateOfBirth = dateOfBirth.toString();
 var mydate = new Date(dateOfBirth);
 var month = mydate.getMonth() + 1;
 var date = mydate.getDate();
 var star = [{
 name: "Aquarius",
 startMonth: 1,
 startDate: 21,
 endMonth: 2,
 endDate: 19

 },
 {
 name: "Pisces",
 startMonth: 2,
 startDate: 20,
 endMonth: 3,
 endDate: 20
 },
 {
 name: "Aries",
 startMonth: 3,
 startDate: 21,
 endMonth: 4,
 endDate: 20
 },
 {
 name: "Taurus",
 startMonth: 4,
 startDate: 21,
 endMonth: 5,
 endDate: 21
 },
 {
 name: "Gemini",
 startMonth: 5,
 startDate: 22,
 endMonth: 6,
 endDate: 21
 },
 {
 name: "Cancer",
 startMonth: 6,
 startDate: 22,
 endMonth: 7,
 endDate: 22
 },
 {
 name: "Leo",
 startMonth: 7,
 startDate: 23,
 endMonth: 8,
 endDate: 22
 },
 {
 name: "Virgo",
 startMonth: 8,
 startDate: 23,
 endMonth: 9,
 endDate: 22
 },
 {
 name: "Libra",
 startMonth: 9,
 startDate: 23,
 endMonth: 10,
 endDate: 22
 },
 {
 name: "Scorpio",
 startMonth: 10,
 startDate: 23,
 endMonth: 11,
 endDate: 21
 },
 {
 name: "Sagittarius",
 startMonth: 11,
 startDate: 22,
 endMonth: 12,
 endDate: 21
 },
 {
 name: "Capricorn",
 startMonth: 12,
 startDate: 22,
 endMonth: 1,
 endDate: 20
 }
 ];

 for (i = 0; i <= star.length; i++) {
 if ((month == star[i].startMonth && date >= star[i].startDate) || ( month == star[i].endMonth && date <= star[i].endDate )) {
 alert("your star is" + " " + star[i].name)


 }
 }
 };*/


/*
 Dictionary program*/


/*
 var search = prompt("Please enter a world to search.");
 search = search.toLowercase();
 var library = [{
 w : "arrive",
 m : "Reach a destination by movement or progress."
 },
 {
 w : "achieve",
 m : "To gain with effort."
 },
 {
 w : "arise",
 m : "Come into existence, take on form or shape."
 },
 {
 w : "amid",
 m : "In the middle of"
 }
 ];
 for (i = 0 ; i <= library.length ; i++){
 if (search === library [i].w){
 alert(library [i].m)
 }
 };
 */


/*
 var word = prompt("Enter a word.");
 alert(word.split(""));

 */

/*
 function calc(){
 var n1 = parseInt(document.getElementById('num1').value);
 var n2 = parseInt(document.getElementById('num2').value);

 var op = document.getElementById('opr').value;

 if(op === '+'){
 document.getElementById("result").value = n1+n2
 }
 if(op === '-'){
 document.getElementById("result").value = n1-n2
 }
 if(op === 'x'){
 document.getElementById("result").value = n1*n2
 }
 if(op === '/'){
 document.getElementById("result").value = n1/n2
 }
 }*/

/*
 function add(){
 var n1 = parseFloat(document.getElementById('num1').value);
 var n2 = parseFloat(document.getElementById('num2').value);
 parseFloat(document.getElementById('result').value = n1+n2)
 }
 function sub(){
 var n1 = parseFloat(document.getElementById('num1').value);
 var n2 = parseFloat(document.getElementById('num2').value);
 parseFloat(document.getElementById('result').value = n1-n2)
 }

 function multi(){
 var n1 = parseFloat(document.getElementById('num1').value);
 var n2 = parseFloat(document.getElementById('num2').value);
 parseFloat(document.getElementById('result').value = n1*n2)
 }
 function div(){
 var n1 = parseFloat(document.getElementById('num1').value);
 var n2 = parseFloat(document.getElementById('num2').value);
 parseFloat(document.getElementById('result').value = n1/n2)
 }*/

/*
function log() {
 var id = [
  {
   name: "hamid",
   password: "12"
  },
  {
   name: "rashid",
   password: "23"
  },

  {
   name: "masroor",
   password: "34"
  }];
 for (i = 0; i <= id.length ; i++) {
  if (document.getElementById("name").value === id [i].name && document.getElementById("password").value === id[i].password) {
   document.getElementById("output").value = "login successful"
   break
  }
else (document.getElementById("output").value = "login unsuccessful")
 }

}
*/

/*function one(){
 document.getElementById("num1").value = 1
}
function two(){
 document.getElementById("num1").value = 2
}
function three(){
 document.getElementById("num1").value = 3
}
function four(){
 document.getElementById("num1").value = 4
}
function five(){
 document.getElementById("num1").value = 5
}
function six(){
 document.getElementById("num1").value = 6
}
function seven(){
 document.getElementById("num1").value = 7
}
function eight(){
 document.getElementById("num1").value = 8
}
function nine(){
 document.getElementById("num1").value = 9
}*/

/*
function time() {
 var presTime = new Date();
 var hr = presTime.getHours();
 var min = presTime.getMinutes();
 var sec = presTime.getSeconds()
 document.getElementById("time").value = hr + ":" + min + ":" + sec
}

*/

/*
function currentTime () {
 var time = new Date();
 var hr = time.getHours();
 if (hr < 10){
  hr = "0"+ hr
 };
 var min = time.getMinutes();
 if (min < 10){
  min = "0"+ min
 };
 var sec = time.getSeconds();
 if (sec < 10){
  sec = "0"+ sec
 };
 document.getElementById("timer").value = hr + ":" + min + ":" + sec
 setInterval(currentTime,500)
}
*/

 var time1 = new Date();
 var min1 = time1.getMinutes();
 /*if (min1 < 10){
  min1 = 0 + min1
 }*/
 var sec1 = time1.getSeconds();
 /*if (sec1 < 10){
  sec1 = 0 + sec1
 }*/
 var milisecond1 = time1.getMilliseconds();
 /*if (milisecond1 < 10){
  milisecond1 = 0 + milisecond1
 }
*/
/*
function stopwatch (){
var time = new Date ();
var min = time.getMinutes();
 min = min-min1
  /!*if (min < 10){
   min = 0 + min
 }*!/
var sec = time.getSeconds();
 sec = sec-sec1
 /!*if (sec < 10){
  sec = 0 + sec
 }*!/

var milisecond = time.getMilliseconds();
 milisecond = milisecond
 /!*if (milisecond < 10){
  milisecond =  0 + milisecond
 }*!/
 document.getElementById("stoptimer").value =( min + ":" + sec + ":" + milisecond)
 setInterval(stopwatch,1)
}
function stopwatchstop(){
 document.getElementById("stoptimer").value =( "00" + ":" + "00" + ":" + "000")

}
*/


function delay(a,b){
 var a = function a ()
 var c = new Date ().getMilliseconds()+1 ;
 if (new Date ().getMilliseconds()+ b == c){
  a();
 }
 setInterval(delay,1)
}


function display(){
 alert("Hello");
 delay (display,2000)
}








