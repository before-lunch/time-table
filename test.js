// This is a JavaScript file
var applicationKey="76a0e4a99cf4d5e0c523b288ebd1ec05280ecd540fb511d03c5d539a7dbed9dc"; 

var clientKey="8255cee3e2bc58390a06b1ff8cbf0b21690ab220a64eac7cfc0ed8c56d649c3c"; 

var ncmb=new NCMB(applicationKey,clientKey); 

function roguin(){ 

var username=document.getElementById("username").value; 

    var password=document.getElementById("password").value; 

ncmb.User.login(username, password) 

.then(function(user) { 

/* 処理成功 */ 

alert("ログインに成功しました。"); 

location.href = "index.html"; 

}) 

.catch(function(error) { 

/* 処理失敗 */ 

alert("ログインに失敗しました。"); 

}); 

} 

 
 

function save(){ 

    var event=document.getElementById("event").value;
    var task=document.getElementById("task").value;
    var ranges=document.getElementById("ranges").value;
    var rangeg=document.getElementById("rangeg").value;
    var dlmon=document.getElementById("dlmon").value;
    var dlday=document.getElementById("dlday").value;
    var memo=document.getElementById("memo").value;
var user = new ncmb.User(); 

// [NCMB] ID / PW で新規登録 

user.set("event",event)

.set("task",task)
.set("ranges",ranges)
.set("rangeg",rangeg)
.set("dlmon",dlmon)
.set("dlday",dlday)
.set("memo",memo)

.signUpByAccount() 

.then(function(user) { 

/* 処理成功 */ 

// [NCMB] userインスタンスでログイン 

ncmb.User.login(user) 

.then(function(user) { 

/* 処理成功 */ 

alert("保存しました"); 

location.href = "index.html"; 

}) 

.catch(function(error) { 

/* 処理失敗 */ 

alert("失敗しました"); 

}); 

}) 

.catch(function(error) { 

/* 処理失敗 */ 

alert("すでにアカウントが存在しているか、記入が不完全です。"); 

}); 

} 

const user = ncmb.User.getCurrentUser();
function aa() {

    alert("aa");
    var ss=document.getElementById("ss").value;
    var currentUser = ncmb.User.getCurrentUser();
    var ss = user.set("dd").update();
}
