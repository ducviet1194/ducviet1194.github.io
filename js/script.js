var paragraph1 = document.getElementById("p1");
var paragraph2 = document.getElementById("p2");
var paragraph3 = document.getElementById("p3");
function changeFontSize(x){
	var doanVan = document.querySelectorAll("p");
	doanVan[0].style.fontSize = x+"px";
	doanVan[1].style.fontSize = x+"px";
	doanVan[2].style.fontSize = x+"px";
}
function increaseFontSize(paragraph){
	var theSize = window.getComputedStyle(paragraph, null).getPropertyValue("font-size");
	if(parseFloat(theSize)<=29){
		paragraph.style.fontSize = parseFloat(theSize) + 1 + "px";
	}
}
function decreaseFontSize(paragraph){
	var theSize = window.getComputedStyle(paragraph, null).getPropertyValue("font-size");
	if(parseFloat(theSize)>=11){
		paragraph.style.fontSize = parseFloat(theSize) - 1 + "px";
	}
}
function changeColor(){
	paragraph1.style.color = "green";
	paragraph2.style.color = "yellow";
	paragraph3.style.color = "red";
}
function changeBgColor(color){
	document.body.style.background = color;
}
function copyContent(paragraph1, paragraph2){
	paragraph1.innerText = paragraph2.innerText;
}