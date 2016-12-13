<?php
require_once 'mysql.func.php';
connect(); 
$sql="select id,chanpin,pDesc,tupian, buy,chengjiao,  sell,datas,buybzj, sellbzj, zuixiao, yongjin, baozhuang,time from product ";
$rows=fetchAll($sql);
echo json_encode($rows);
?>
