<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!--#include file="inc/conn.asp"-->
<!--#include file="inc/CheckNum.asp"-->
<!--#include file="inc/check.asp"-->
<%'=session("Role")%>
<%
	if session("Role")<>"customer"  then  response.End()

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>金石环球</title>
    <link rel="shortcut icon" href="images/logo-min.png" type="image/x-icon"/>
<meta charset="utf-8">
  <meta http-equiv="Expires" content="0" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
    <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="plugins/font-awesome-4.4.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="plugins/ionicons-master/css/ionicons.min.css" />
    <link rel="stylesheet" href="plugins/datatables/dataTables.bootstrap.css" />
    <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker-bs3.css" />
    <link rel="stylesheet" href="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" />
    <link rel="stylesheet" href="css/AdminLTE.css" />
    <link rel="stylesheet" href="css/buttons.css" />
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/new.css">
    <style>
        *{ margin:0; padding:0; list-style:none;}
        a{ text-decoration:none;}
        a:hover{ text-decoration:none;}
        .tcdPageCode{padding: 15px 20px;text-align: left;color: #ccc;text-align:center;}
        .tcdPageCode a{display: inline-block;color: #b465ac;display: inline-block;height: 25px;	line-height: 25px;	padding: 0 10px;border: 1px solid #ddd;	margin: 0 2px;border-radius: 4px;vertical-align: middle;}
        .tcdPageCode a:hover{text-decoration: none;border: 1px solid #b465ac;}
        .tcdPageCode span.current{display: inline-block;height: 25px;line-height: 25px;padding: 0 10px;margin: 0 2px;color: #fff;background-color: #b465ac;	border: 1px solid #b465ac;border-radius: 4px;vertical-align: middle;}
        .tcdPageCode span.disabled{	display: inline-block;height: 25px;line-height: 25px;padding: 0 10px;margin: 0 2px;	color: #bfbfbf;background: #f2f2f2;border: 1px solid #bfbfbf;border-radius: 4px;vertical-align: middle;}
        #tbb>thead>tr>th{
            text-align: center;
        }
    </style>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="plugins/jQuery/jQuery-2.1.4.min.js"></script>
    <script src="plugins/jquery-ui-1.11.4/jquery-ui.min.js"></script>
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="plugins/datatables/jquery.dataTables.min.js"></script>
    <script src="plugins/datatables/dataTables.bootstrap.min.js"></script>
    <script src="plugins/slimScroll/jquery.slimscroll.min.js"></script>
    <script src="plugins/fastclick/fastclick.min.js"></script>
    <script src="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
    <script src="plugins/dist/js/app.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js"></script>
    <script src="plugins/daterangepicker/daterangepicker.js"></script>
    <script src="plugins/datepicker/locales/bootstrap-datepicker.zh-CN.js"></script>
    <script src="js/dtime33.js"></script>
    <script src="js/dtable.js"></script>



</head>

<body class="hold-transition skin-blue sidebar-mini">
   
        <div class="wrapper">
        <!--头部-->
            <!--#include file="top.asp"-->
            <!--左侧边栏-->
            <!--#include file="left3.asp"-->


<!--右侧部分内容-->
            <div class="content-wrapper">
                <section class="content" style="width: 100%">
                    <div class="row">
                        <div class="right_main row" id="aaa2" style="width: 90.2%;box-shadow: 0px 4px 4px #dcdcdc;float:left;overflow:hidden">
                            <div class="curstomer_right">
                                <div class="curstomer_right_header" style="padding-left: 20px;height: 50px;line-height: 50px;">
                                    订单信息

                                </div>

                                <div style="overflow: hidden;margin-top:30px">
                                    <div style="display: inline-block;float: left;width: 50%;height: 38px;line-height: 38px;text-align: center;">
                                        <span style="float: left;width: 30%;text-align: right;padding-right: 10px;">订单种类</span>
                                        <select name="orderType" id="orderType" style="float: left;width: 60%;padding-left: 10px;height: 38px;line-height: 38px;" onchange="cc()">
                                            <option value="all" selected>所有订单</option>
                                            <option value="1">持仓订单</option>
                                            <option value="2">挂单</option>
                                            <option value="3">交易历史</option>
                                        </select>
                                    </div>
                                    <div style="display: inline-block;float: left;width: 50%;">
                                        <span  style="float: left;line-height: 38px;padding-right: 10px;">查询时间：</span>
                                        <div id="reportrange" class="dateRange  fn-tinput d-input" style="width: 60%;float: left;height: 38px;">
                                            <span id="searchDateRange" style="width:100%;text-align: left;"></span>
                                        </div>
                                        <b class="fa fa-close  calendar-clear " style="top: 159px;"></b>
                                        <div class="clear"></div>
                                    </div>
                                </div>

                                <div style="margin-top: 50px;width: 96%;margin-left: 2%;margin-bottom:20px">
                                     <div style="float: left;">
                                         显示
                                         <select name="" id="display-number" style="height: 30px;" onchange="cc()"></select>
                                         结果
                                     </div>




                                    <table class="table  table-striped " id="tbb">
                                        <thead>
                                        <tr>
											<th>订单号</th>
                                            <th>账号</th>
                                            <th>品种</th>
                                            <th>类型</th>
                                            <th>手数</th>
                                            <th>开仓时间</th>
                                            <th>开仓价格</th>
                                            <th>止盈价</th>
                                            <th>止损价</th>
                                            <th>平仓时间</th>
                                            <th>平仓价格</th>
                                            <th>盈亏</th>
                                        </tr>
                                        </thead>
                                        <tbody id="positionOrder-tboy">
											<tr>
										        <td colspan="12" style="text-align: center;">表中数据为空</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="4"></td>
                                                <td id="numberHand"></td>
                                                <td colspan="6"></td>
                                                <td id="profitLoss"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <!--分页条-->
                                        <p id="ap"></p>
                                        <p id="p"></p>
                                        <div class="tcdPageCode" style="overflow: hidden;float: right;"></div>
                                        <div style="float: left;overflow: hidden;height: 55px;line-height: 55px;">
                                            共<span id="ddp">0</span>条信息，当前显示<span id="ddc">0</span>条信息。
                                        </div>
                                    <!--分页条-->
                                </div>


                            </div>

                        </div>
                    </div>
                </section>
            </div>
              <!--#include file="footer.asp"-->
        </div>



    <script src="js/Chart.js"></script>
    <script src="js/fusioncharts.js"></script>
    <script src="js/new.js"></script>
    <script type="text/javascript" src="js/jquery.page.js"></script>
    <script>
    var formatDate = function (date) {
                var y = date.getFullYear();
                var m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                var d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            };
    //      用于时间控件上默认时间的填充
            $(function(){
                var myDate = new Date();
                myDate.setDate(1);
                var b=myDate.toLocaleDateString()

                var b_arr= b.split('/');
                var ad="";
                ad=b_arr[0]+"年"+b_arr[1]+"月"+b_arr[2]+"日";

                myDate= new Date();
                myDate.setMonth( myDate.getMonth()+1 );
                myDate.setDate( 0 );

                var s=formatDate(myDate);
                var a_arr=s.split('-');
                var ap="";
                ap=a_arr[0]+"年"+a_arr[1]+"月"+a_arr[2]+"日";

                $("#searchDateRange").html(ad+"-"+ap);
            })
//      用于时间控件上默认时间的填充----结束

//      时间控件调用
        $(function () {
            CreateDefaultTime(3,"reportrange");
        });
//      时间控件调用-----结束

//      用于动态添加显示数量
        $(function(){
            var sstr="";
            sstr='<option value="10" selected>10项</option><option value="20">20项</option><option value="30">30项</option>'
            $("#display-number").html(sstr);
        })
//      用于动态添加显示数量------结束

//      分页控件
        function page( totalPage,nowPage){
            $(".tcdPageCode").createPage({
                pageCount:totalPage,
                current:nowPage,
                backFn:function(p){
                    ck($("#display-number").val(),$("#searchDateRange").html(),$("#orderType").val(),p)
                }
            })
        }
//      分页控件------结束





//    页面加载完毕以后默认的数据-----方法
    function loadnow(a,b,c){
        $.ajax({
            url:'customer_trades_data.asp',
            type:'post',
            data:{
                id:1,
                record_num:a,
                searchtime:b,
                searchtype:c,
            },
            success:function(data){
                var pstr="";                    //建立一个空数组用于放置字符串的拼接
                if(data=="无记录"){
                    $("#ddp").html("0");
                    $("#ddc").html("0");
                    pstr='<tr><td style="text-align: center;" colspan="12">表中数据为空</td></tr>';
                    $("#positionOrder-tboy").html(pstr);
                    $("#numberHand").html(0);
                    $("#profitLoss").html(0);
                    page(1,1);
                }else {
                    var nm=data.split(",");
                    var snm=nm[0].split(":");
                    var as_nm=nm.length-2;

                    $("#ddc").html(as_nm);
                    $("#ddp").html(snm[1]);
                    $("#numberHand").html(snm[3]);
                    var ts=parseFloat(snm[4]).toFixed(2);
                    $("#profitLoss").html(ts);
                    var stc="";
                    for(var i=1;i<nm.length-1;i++){
                        var p=nm[i].split("_");
                        stc+='<tr><td >'+p[0]+'</td><td>'+p[1]+'</td><td>'+p[2]+'</td><td>'+p[3]+'</td><td>'+p[4]+'</td><td>'+p[5]+'</td><td>'+p[6]+'</td><td>'+p[7]+'</td><td>'+p[8]+'</td><td>'+p[9]+'</td><td>'+p[10]+'</td><td>'+p[11]+'</td></tr>'
                    }
                    $("#positionOrder-tboy").html(stc);

                    page(snm[2],1);
                }
            }
        })
    }



//    分页点击----方法
    function ck(a,b,c,p){
        $.ajax({
            url:'customer_trades_data.asp',
            type:'post',
            data:{
                id:2,
                record_num:a,
                searchtime:b,
                searchtype:c,
                page:p,
            },
            success:function(data){
                var pstr="";                    //建立一个空数组用于放置字符串的拼接
                if(data=="无记录"){
                    $("#ddp").html("0");
                    $("#ddc").html("0");
                    pstr='<tr><td style="text-align: center;" colspan="12">表中数据为空</td></tr>';
                    $("#positionOrder-tboy").html(pstr);
                }else {
                    var nm=data.split(",");
                    var snm=nm[0].split(";");
                    var as_nm=nm.length-2;

                    $("#ddc").html(as_nm);
                    $("#ddp").html(snm[1]);

                    var stc="";
                    for(var i=1;i<nm.length-1;i++){
                        var p=nm[i].split("_");
                        stc+='<tr><td >'+p[0]+'</td><td>'+p[1]+'</td><td>'+p[2]+'</td><td>'+p[3]+'</td><td>'+p[4]+'</td><td>'+p[5]+'</td><td>'+p[6]+'</td><td>'+p[7]+'</td><td>'+p[8]+'</td><td>'+p[9]+'</td><td>'+p[10]+'</td><td>'+p[11]+'</td></tr>'
                    }
                    $("#positionOrder-tboy").html(stc);

                }


            }
        })
    }






//    页面加载完毕以后默认的数据
        window.onload=function(){
                loadnow($("#display-number").val(),$("#searchDateRange").html(),$("#orderType").val())
        }

//    订单种类发生改变
        function cc(){
                loadnow($("#display-number").val(),$("#searchDateRange").html(),$("#orderType").val())
        }
//    时间发生改变以后
        function ppc(nowtime){
            loadnow($("#display-number").val(),nowtime,$("#orderType").val());
        }


    </script>






</body>
</html>
