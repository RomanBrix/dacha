<?php
    require_once 'connection.php';

    $link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));

    if($link){
        $result_albums = mysqli_query($link, "SELECT id_album AS id, name_album FROM albums");
        $albums_arr = [];
            while($row = $result_albums->fetch_assoc()) {
                $obj = (object) $row;
                array_push($albums_arr,$obj);
             }

        print_r(json_encode($albums_arr));
        mysqli_close($link);
    }
?>
