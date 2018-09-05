//bai 1
function square(x){
    return x*x;
}

//bai2
function square2(a,b,c){
    return square(3*a+2*b-c);
}

//bai3
var chuoi = "sống chậm lại yêu thương nhiều hơn"
function cutStr(chuoi){
  return chuoi.slice(10) + "...";
}

//bai4
function viethoachuoi(chuoi){
  var x=chuoi.slice(0,1);
  var y=chuoi.slice(1);
  return x.toUpperCase() + y.toLowerCase();
}

//bai5
var arrNum = [4,7,2,8,1];
function sortNum(arrNum){
  arrNum.sort(function(a, b){return a - b});
  return arrNum[0];
}

//bai6
var arrName = ["Minh","Dũng","Hung","Thường","Phúc"]
function sortName(arrName){
  arrName.sort();
  document.write(arrName);
}

//bai7
var teacher = {
  firstName: "Ngọc",
  lastName: "Trinh",
  age: 28,
  say: function(){}
}
var student = {
  firstName: "Huy",
  lastName: "Hải",
  age: 24,
  say: function(){}
}
var parent = {
  firstName: "Huy",
  lastName: "Hoàn",
  age: 52,
  say: function(){}
}

var aboutMe = function(){
  var str = "Xin chào, Tôi là "+ this.firstName +" "+ this.lastName + ". Năm nay tôi "+ this.age + " tuổi."
  document.write(str);
}
teacher.say = aboutMe;
student.say = aboutMe;
parent.say = aboutMe;