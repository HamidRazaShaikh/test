/*var colors = ['red', 'blue', 'green', 'yellow'];
 var ele = document.getElementsByClassName('a');

 ele[2].innerHTML = '<h1>Hello</h1>';

 ele[1].setAttribute('title','This is title');
 console.log(ele[1].getAttribute('title'));
 console.log(ele[1].hasAttribute('title'));

 console.log(ele[1].attributes);


 var i = 0;
 setInterval(function () {
 ele[1].style.background = colors[i++];
 }, 1000);

 console.log(ele);*/


var ele = document.createElement('A');
ele.setAttribute('href', 'https://facebook.com');
ele.setAttribute('target', '_blank');
var text = document.createTextNode('Facebook');
ele.appendChild(text);

//ele.innerText = 'Facebook';

//document.body.appendChild(ele);

var div2 = document.body.children[1];

document.body.insertBefore(ele, div2);
document.body.removeChild(div2);

//document.getElementsByTagName('DIV')[0].appendChild(ele);




console.log(ele);
console.log([ele]);