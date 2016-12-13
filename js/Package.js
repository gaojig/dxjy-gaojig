$("header").load("hearder.html");
$("footer").load("footer.html");
//****************************$.get();
function get(){
    var www=window.location.href;
    www=www.slice(-2,www.length);
    var app=angular.module('myApp',[]);
    app.controller('siteCtrl',function ($scope, $http) {
        function getjson(url){
            $http.get(url,{params:{id:www}}).success(function (response) {
                $scope.cp=response;
            });
        }
        getjson("data/listOne.php");
    });//anglar.js 调用php
    //jq  click 传送买卖数据
    $("#buy").click(function (event) {
        event.preventDefault();
        http("data/doBuySell.php",$("#buyUnitPrice").val(),$("#buyset").val(),www,"buy","111");
    });
    $("#sell").click(function (event) {
        event.preventDefault();
        http("data/doBuySell.php",$("#sellUnitPrice").val(),$("#sellset").val(),www,"sell","111");
    });
}
get();
function http(url,UnitPrices,sets,ids,buySells,uesrs){
    $.get(url,{UnitPrice:UnitPrices,set:sets,id:ids,buySell:buySells,uesr:uesrs},function (data) {
        window.location.href='http://www.xhangxian.com/dxjy/Package.html';
    });
}