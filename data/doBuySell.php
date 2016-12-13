<?php

require_once 'mysql.func.php';
connect();

$act=$_REQUEST['buySell'];
$pid=$_REQUEST['id'];
$UnitPrice=$_REQUEST['UnitPrice'];
$datas=$_REQUEST['set'];

$user=$_REQUEST['uesr'];  //用户

$time=date('Y-m-d H:i:s',time());

$result = compact("act", "pid", "UnitPrice", "datas", "user",  "time");

$res=insert("chujia",$result);


if($res){
		//订单管理  当出价大于必卖价或者必买价 产生订单
		if($act=="buy"){
			//买价大于必卖价产生订单
            echo $act;
		}else if($act=="sell"){
			//卖出价大于必买价产生订单
            echo $act;

		}

	}else{
		echo "出价失败";

	}

?>