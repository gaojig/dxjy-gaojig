$("header").load("hearder.html");
$("footer").load("footer.html");
var all00=["用户管理","出价管理","订单管理","商品管理"];//导航标题
var all01=["用户管理","出价管理","订单管理","商品管理"];//详情页标题
var svg0=["05","06","07","08"];//svg 白
var svg1=["05-1","06-1","07-1","08-1"];//svg 灰
var ulhtml="<ul >";
var div=$("#section_div");//id section_div的div
var divhtml="";
$.each(all00,function (i,index) {
    ulhtml+=(i==0?
        ("<li class='section_default'><span><img src='image/"+svg1[i]+".svg'></span>"+index+"<span class='section_span'></span></li>")
        :
        ("<li><span><img src='../image/"+svg1[i]+".svg'></span>"+index+"<span></span></li>"));
    divhtml+=(i==0?
            ("<div class='section_details'><span>"+all01[i]+"</span><p><span></span></p></div>")
            :
            ("<div><span>"+all01[i]+"</span><p><span></span></p></div>")
    );
});//循环生成导航
ulhtml+="</ul>";
div.html(ulhtml+divhtml);//生成
/***** section id section_div*****/
//*** div
//*** ul
var li=$("#section_div>ul>li");//获得所有#section_div 下的li
var divSon=$("#section_div>div");//获得所有#section_div 下的div
function clickLoad() {
    var img=$(".section_default img")[0];//获取class为section_default img
    img.src="../"+(""+img.src).slice(-14).replace("-1","");//需改src svg
    var width=$(".section_details>span").css("width");//获得详情页的标题的width
    $(".section_details>p>span").css("width",width);//width的值付给红色条
}//class为section_default img  load修改svg
clickLoad();
$("#section_div li").click(function (event) {
    event.preventDefault();
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
    transaction();//启动transaction()
});//导航的li点击事件
//*************** $.get();
$.get("data/listuser.php",function (data) {
    divSon[0].innerHTML+="<div>" +
        "<table cellspacing='0' cellpadding='0'>" +
        "<tbody><tr>" +
        "<td>ID</td><td>用户名</td><td>手机号</td><td>身份证</td><td>银行卡</td><td>收货地址</td><td>账号余额</td><td>注册时间</td><td>操作</td>" +
        "</tr>" +
        ""+data+"" +
        "</tbody>" +
        "</table>" +
        "<p><a href='#' class='a-left'>上一页</a><a href='#' class='a-yeshu'>1</a><a href='#' class='a-right'>下一页</a></p></div>";
});
divSon[1].innerHTML+="<div>" +
    "<table cellspacing='0' cellpadding='0'>" +
    "<tbody><tr>" +
    "<td>ID</td><td>对手</td><td>手机号</td><td>出价产品</td><td>方向</td><td>单价</td><td>数量</td><td>出价时间</td><td>操作</td>" +
    "</tr>" +
    "</tbody>" +
    "</table>" +
    "<p><a href='#' class='a-left'>上一页</a><a href='#' class='a-yeshu'>1</a><a href='#' class='a-right'>下一页</a></p></div>";
divSon[2].innerHTML+="<div>" +
    "<table cellspacing='0' cellpadding='0'>" +
    "<tbody><tr>" +
    "<td>ID</td><td>对手</td><td>手机号</td><td>出价产品</td><td>方向</td><td>单价</td><td>数量</td><td>出价时间</td><td>状态</td><td>操作</td>" +
    "</tr>" +
    "</tbody>" +
    "</table>" +
    "<p><a href='#' class='a-left'>上一页</a><a href='#' class='a-yeshu'>1</a><a href='#' class='a-right'>下一页</a></p></div>";
divSon[3].innerHTML+="<div>" +
    "<table cellspacing='0' cellpadding='0'>" +
    "<tbody><tr>" +
    "<td>ID</td><td>商品名</td><td>必买价</td><td>比卖家</td><td>最小单位</td><td>保证金比例</td><td>佣金</td><td>包装鉴定费</td><td>操作</td>" +
    "</tr>" +
    "</tbody>" +
    "</table>" +
    "<p><a href='#' class='a-left'>上一页</a><a href='#' class='a-yeshu'>1</a><a href='#' class='a-right'>下一页</a></p></div>";
function transaction() {
    window.setTimeout(function () {
        xianshi();
    },200);
}//交易明细的分页 每6tr为一页//延迟75ms
transaction();
function xianshi() {
    var tr=$("#section_div>.section_details tr:not(:nth-child(1))");//获得#section_div>div:nth-child(2) tr
    var c=parseInt(tr.length/6);//计算出会有多少页
    if (c*6<tr.length){
        c++;
    }//如果c有小数点 进1
    for (var i=0;i<(tr>6?6:tr.length);i++){
        tr[i].className="dislayTr";
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