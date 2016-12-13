<?php

require_once 'mysql.func.php';
connect(); 

$sql="select p.chanpin, c.user, c.act, c.UnitPrice, c.datas, c.time from chujia as c join product p on c.pid=p.id";
$rows=fetchAll($sql);
echo json_encode($rows);

?>