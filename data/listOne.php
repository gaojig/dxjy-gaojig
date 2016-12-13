<?php
header('Content-Type: application/json');

require_once 'mysql.func.php';
connect();
$id= $_REQUEST['id'];
$sql="select chanpin,pDesc,tupian, buy,datas,chengjiao, sell, buybzj, sellbzj, zuixiao, yongjin, baozhuang,time from product where id=".$id;
$rows=fetchOne($sql);
echo json_encode($rows);
?>