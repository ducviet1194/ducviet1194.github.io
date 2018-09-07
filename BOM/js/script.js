function dapandung(id){
    document.getElementById(id).style.background = '#1BFF0C';

}
function dapansai(id){
    document.getElementById(id).style.background = '#FF2727';
}
function chuyencauhoi(){
    var str = window.location.href;
    window.location.href = str.slice(0,str.length-6) + (Number(str.slice(str.length-6,str.length-5))+1) + ".html";
}
function batdau(){
    var str = window.location.href;
    window.location.href = str.slice(0,str.length-9) + "cau1.html";
}
function sairoi(){
    var str = window.location.href;
    window.location.href = str.slice(0,str.length-9) + "choilai.html";
}
function choilai(){
    var str = window.location.href;
    window.location.href = str.slice(0,str.length-12) + "quiz.html";
}