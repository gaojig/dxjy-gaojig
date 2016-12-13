<?php

require_once 'mysql.func.php';
connect();

$act=$_REQUEST['act'];
$id=$_REQUEST['id'];


if($act=="delete"){
	// 删除操作
$where="id={$id}";
	$res=delete("product",$where);
	if($res){
		$mes="删除成功!";
	}else{
		$mes="删除失败!";
	}
	echo $mes;


}elseif($act=="update"){
	// 更新操作

}

?>