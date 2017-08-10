<?php 
     require_once 'connection.php';

    $link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));

    if($link){
        $data = json_decode(file_get_contents("php://input"), true);
        $nameAlbum = $data['name'];
//        print_r($nameAlbum);
        $sql = "INSERT INTO albums (name_album) VALUES ('". $nameAlbum ."');";
        if ($link->query($sql) === TRUE) {
                     print_r(json_encode(true));
                } else {
                    print_r(json_encode(false));
                }
        mysqli_close($link);

       
    }
?>