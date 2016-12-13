<?php
    require_once 'mysql.func.php';
    connect();
    $sql="select id,user,name,phone, idcard, bank, province, city, region, address, time from user ";
    $rows=fetchAll($sql);
    echo json_encode($rows);
?>