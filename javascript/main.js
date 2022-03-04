// var Name = 'mehran aslanii'
// var IsExist = true;
// // alert(typeof Name);
// function Mehranalert(){
//     var x = 200;
//     var y = 150;
//     var c = x + y;
//     alert(c)
// }
// var person = ["mehran","aslani",34,"saqqez"];

// document.write(
// "Name is :   " + person[0] + "<br /> " + "family is :  " +
// person[1] + "<br /> " + "age is :  " + person[2]  +
//  "<br /> " + "from  :  " + person[3]
// );

//
function showDate() {
  document.getElementById("lbl").innerHTML = Date();
}
function changeInput(value) {
  document.getElementById("lbl").innerHTML = value;
}
// var x = 5
// switch(x){
//     case 1:{
//         alert('1');
//         break;
//     }
//     case 2:{
//         alert('2');
//         break;
//     }
//     case 3:{
//         alert('3');
//         break;
//     }
//     case 4:{
//         alert('4');
//         break;
//     }
//     default :{
//         alert('not found');
//         break;
//     }
// }
// debugger;
// var names = ["mehran", "saadon", "soran", "sasan", "martia"];
// var element = document.getElementById("result");
// text = "";
// for (var i = 0; i <= 4; i++) {
//   text += names[i] + "<br/> ";
//   element.innerHTML = text;
// }

function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "is to low";
    if (x > 10) throw "is to height";
  } catch (err) {
    message.innerHTML = "input is " + err;
  } finally {
    document.getElementById("demo").value = "";
  }
}
function MyFunction() {
  var x = document.forms["myForm"]["fname"].value;
  if(x=="") {
    alert("inter the name..");
    return false;
  }
}
function MYFUNCTION(){
  var x,text;
  x=document.getElementById('fnum').value;
  if (isNaN(x) || x<1 || x>10 ){
  text="input no valid";
  document.getElementById('mresult').innerHTML=text;
}
  else {
text="input ok"
document.getElementById('mresult').innerHTML=text;
document.getElementById('mresult').style.color="green";
  }

}