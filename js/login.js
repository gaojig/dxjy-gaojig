$("header").load("hearder.html");
$("footer").load("footer.html");
/*****************************************************************/
function Code() {
    var arr={suiji:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'};
    var html="";
    for (var i=0;i<4;i++){
        var random=parseInt(Math.random()*(61+1));//验证码
        html+=arr.suiji[random];
    }
    $(".VerI").html(html);
}//********************************  随机码
Code();
var V=$("#Verification");
V.click(function (event) {
    event.preventDefault();
    Code();
});// 点击转换随机码
V.keyup(function () {
    var H=$(this).val();
    if (H.length==4&&H.toLowerCase()==$(".VerI").html().toLowerCase()&&$("#user").val()!=""&&$("#password").val()!=""){
        $("#button").removeAttr("disabled");
    }else {
        $("#button")[0].disabled="disabled";
    }
});//验证随机码
console.dir($("#button")[0]);

