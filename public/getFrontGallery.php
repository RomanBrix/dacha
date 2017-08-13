<?php
require_once 'connection.php';

$link = mysqli_connect($host, $user, $password, $database)
or die("Ошибка " . mysqli_error($link));

if($link){
    $result_albums = mysqli_query($link, "SELECT  albums.name_album, images.photo_name, images.id_album AS 'id' FROM  albums JOIN images ON  albums.id_album = images.id_album ORDER BY albums.id_album;");
    $albums_arr = [];
    while($row = $result_albums->fetch_assoc()) {
        // $obj = (object) $row;
        array_push($albums_arr,$row);
    }

    print_r(json_encode($albums_arr));
    mysqli_close($link);
}
// 
?>
