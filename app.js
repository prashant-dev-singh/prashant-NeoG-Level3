
//var name= prompt("Username: ");
//alert("Hi ! Welcome Mr. " +name);



//var btnShowMessage = document.getElementById('btnClick'); 
var btnShowMessage = document.querySelector('#btnClick'); 
var txtInput = document.querySelector('#txtInput');
var txtOutput = document.querySelector("#txtOutput");




btnShowMessage.addEventListener('click',function showMessage(){

var inputText = txtInput.value;
 //txtOutput.value = inputText;

 //var tempUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + inputText;

 // var tempUrl = "https://api.funtranslations.com/translate/pirate.json" +"?text=" + inputText;
// Pirate API

 var tempUrl = "https://api.funtranslations.com/translate/cockney.json" +"?text=" + inputText;
 console.log(tempUrl);

 
 fetch(tempUrl)
 .then(response => response.json())
 .then(json =>  txtOutput.value =json.contents.translated) 
 .catch(errorHandler);



})


function errorHandler()
{
    console.log("Error Occured!",error);
    alert("Error Occured! Please try again later.");
}