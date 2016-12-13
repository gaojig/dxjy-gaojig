<?php

require_once 'mysql.func.php';
connect();

$uploadDir = 'temp/';

if(isset($_POST['upload']))
{
$fileName = $_FILES['userfile']['name'];
$tmpName = $_FILES['userfile']['tmp_name'];
$fileSize = $_FILES['userfile']['size'];
$fileType = $_FILES['userfile']['type'];

$filePath = $uploadDir . $fileName;
$ext = substr(strrchr($fileName, "."), 1);

// make the random file name
$randName = md5(rand() * time());

// and now we have the unique file name for the upload file
$filePath = $uploadDir . $randName . '.' . $ext;

$result = move_uploaded_file($tmpName, $filePath);
if (!$result) {
echo "<p>商品图片上传失败,请重新添加！</p><a href='../adman/product.html'>重新添加</a>";
exit;
}

$chanpin = $_POST['chanpin'];
$pDesc = $_POST['pDesc'];
$tupian = $filePath;
$buy = $_POST['buy'];

$sell = $_POST['sell'];
$buybzj = $_POST['buybzj'];
$sellbzj = $_POST['sellbzj'];
$zuixiao = $_POST['zuixiao'];

$yongjin = $_POST['yongjin'];
$baozhuang = $_POST['baozhuang'];
$datas = $_POST['datas'];
$time=date('Y-m-d H:i:s',time());

$result = compact("chanpin", "pDesc", "tupian", "buy", "sell", "buybzj", "sellbzj", "zuixiao", "yongjin", "baozhuang", "time", "datas");

$res=insert("product",$result);
if($res){
		echo "<p>添加成功!</p><a href='../adman/product.html' target='mainFrame'>继续添加</a>";
	}else{

		echo "<p>添加失败!</p><a href='../adman/product.html' target='mainFrame'>重新添加</a>";
		
	}


}
?>