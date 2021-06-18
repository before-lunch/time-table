// This is a JavaScript file
var applicationKey="383fd59c100444aa229345757a3204296f1083d592d2f4ffc27ea69f282d8860";
var clientKey="7f3200e5c3e63c644f6dbb712ef14c7c7b323dcd836226562493f77b026cc1a6";
var ncmb=new NCMB(applicationKey,clientKey);

function roguin(){
    var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
    ncmb.User.login(username, password)
        .then(function(user) {
            /* 処理成功 */
            alert("ログインに成功しました。");
            location.href = "hontai.html";
        })
        .catch(function(error) {
            /* 処理失敗 */
            alert("ログインに失敗しました。");
        });
}

function sinki(){
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
    var user = new ncmb.User();
// [NCMB] ID / PW で新規登録
user.set("userName", username)
    .set("password", password)
    .signUpByAccount()
    .then(function(user) {
        /* 処理成功 */
        // [NCMB] userインスタンスでログイン
        ncmb.User.login(user)
                .then(function(user) {
                    /* 処理成功 */
                    alert("新規登録に成功しました。");
                    location.href = "hontai.html";
                })
                .catch(function(error) {
                    /* 処理失敗 */
                    alert("新規登録に失敗しました。");
                });
    })
    .catch(function(error) {
        /* 処理失敗 */
        alert("すでにアカウントが存在しているか、記入が不完全です。");
    });
}
