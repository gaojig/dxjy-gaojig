$("header").load("hearder.html");
$("footer").load("footer.html");
//**************************** anglar.js
var app=angular.module('myApp',[]);
app.controller('siteCtrl',function ($scope, $http) {
    function getjson(url){
        $http.get(url).success(function (response) {
            $scope.cp=response;
        });
    }
    getjson("data/listPro.php");
    transaction();
});//anglar.js 调用php
function transaction(){
    window.setTimeout(function () {
        var li=$(".myAppUl>li");
        for (var i=0;i<(li.length>8?8:li.length);i++){
            li[i].className+=" li_display";
        }
        Aclick(li);
    },500);
}//分页 8张为一页
function Aclick(li){
    var c=parseInt(li.length/8);
    if (c<li.length/8){
        c++
    }
    $(".transaction .a-left").click(function (event) {
        event.preventDefault();
        a_lirit(1,li);
    });
    $(".transaction .a-right").click(function (event) {
        event.preventDefault();
        a_lirit(c,li);
    });
}
function a_lirit(c,tr) {
    var a=$(".transaction .a-yeshu");
    var x=parseInt(a.html());
    if (c==1){
        if (x==c){
            return "";
        }else {
            x--;
        }
    }else {
        if (x==c){
            return "";
        }else {
            x++;
        }
    }
    a.html(x);
    $(".myAppUl li.ng-scope.li_display").removeClass("li_display");
    for (var i=(x-1)*8;i<x*8;i++){
        if (i==tr.length){
            break;
        }
        tr[i].className+=" li_display";
    }
}//换页
