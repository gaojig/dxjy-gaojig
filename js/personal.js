$("header").load("hearder.html");
$("footer").load("footer.html");
/***** section id section_div*****/
function clickLoad() {
    var img=$(".section_default img")[0];//获取class为section_default img
    img.src="../"+(""+img.src).slice(-14).replace("-1","");//需改src svg
    var width=$(".section_details>span").css("width");//获得详情页的标题的width
    $(".section_details>p>span").css("width",width);//width的值付给红色条
}//class为section_default img  load修改svg
clickLoad();
$("#section_div li").click(function (event) {
    event.preventDefault();
    var li=$("#section_div>ul>li");//获得所有#section_div 下的li
    var divSon=$("#section_div>div");//获得所有#section_div 下的div
    var img=$(".section_default img")[0];//获取class为section_default img
    var src=(""+img.src).slice(-12);//img 的 src 字符串
    img.src="../"+src.slice(0,-4)+"-1"+src.slice(-4,src.length);//img的src赋值
    $(".section_span").removeClass("section_span");//当前class为 section_span class为 “”
    $(".section_details").removeClass("section_details");//当前class为 section_details class为 “”
    $(this).addClass('section_default').siblings('.section_default').removeClass('section_default');//当前li的class为section_default 其余的为“”
    $(this)[0].children[1].className="section_span";//当前li的class为section_span
    for (var i=0;i<divSon.length;i++){
       if (li[i].className=="section_default"){
           divSon[i].className="section_details";
           break;
       }
    }//循环给对应的div  附上class section_details
    clickLoad();//启动clickLoad()
    if ($(this).text()=="交易明细"||$(this).text()=="订单明细"){
        xianshi();//启动xiaoshi()
    }//只能 交易明细 订单明细 才能使用这fun
});//导航的li点击事件
//***** ***** annglar ***** *****
(function () {
//***** anglar.js *****
    var app = angular.module('myApp', []);
    app.controller('siteCtrl', function($scope, $http) {
        function getjson(url,i){
            $http.get(url).success(function (response) {
                /*i===0?($scope.jy=response)
                    :
                i==1?($scope.dd=response)
                    :
                    ($scope.aq=response);*/
                console.log(response);
            });
        }
        getjson("data/listPro.php",0);
        transaction();
    })
})();
function transaction() {
    xianshi();
    /*var span=$("#section_div>div:nth-child(6) li span:nth-child(2)");
    var app=[span[0].innerText,span[1].innerText,span[2].innerText,span[3].innerText];
    span[0].innerHTML=app[0].slice(0,8)+"***"+app[0].slice(-4);
    span[1].innerHTML=app[1].slice(0,3)+"***"+app[1].slice(-4);
    span[2].innerHTML=app[2].slice(0,7)+"***"+app[2].slice(-4);*/
}//交易明细的分页 每6tr为一页//延迟75ms
function xianshi() {
    var tr=$("#section_div>.section_details tr:not(:nth-child(1))");//获得#section_div>div:nth-child(2) tr
    var c=parseInt(tr.length/6);//计算出会有多少页
    if (c*6<tr.length){
        c++;
    }//如果c有小数点 进1
    for (var i=0;i<(tr>6?6:tr.length);i++){
        tr[i].className+=" dislayTr";
    }//默认的第一页 获得class displayTr
    $(".section_details .a-left").click(function (event) {
        event.preventDefault();
        a_lirit(1,tr);
    });
    $(".section_details .a-right").click(function (event) {
        event.preventDefault();
        a_lirit(c,tr);
    });
}
function a_lirit(c,tr) {
    var a=$(".section_details .a-yeshu");
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
    $("tr.displayTr").removeClass("displayTr");
    for (var i=(x-1)*6;i<x*6;i++){
        if (i==tr.length){
            break;
        }
        tr[i].className+=" displayTr";
    }
}//换页