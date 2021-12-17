
<?php include("db\db.php"); ?>

<?php
header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){
        $query="select * from tracking WHERE id=".$_GET['id'];
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    }else{
        $query="select * from tracking";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll()); 
    }
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);

    $id=$_POST['id'];
    $track_id=$_POST['track_id'];
    $nombre=$_POST['nombre'];
    $Estado=$_POST['Estado'];
    $query="insert into tracking( id, track_id, nombre, Estado) values ('id','track_id','nombre','Estado')";
    $queryAutoIncrement="select MAX(id) as id from tracking";
    $resultado=metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    $id=$_GET['id'];
    $track_id=$_POST['track_id'];
    $nombre=$_POST['nombre'];
    $Estado=$_POST['Estado'];
    $query="SELECT * FROM tracking WHERE id=3";
    $resultado=metodoPut($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $id=$_GET['id'];
    $query="DELETE FROM frameworks WHERE id='$id'";
    $resultado=metodoDelete($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");


?>