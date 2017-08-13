<?php
if((int)$_POST['albumId'][0] > -1){
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {

    $ok = 0;
    $allFiles = count($_FILES["pictures"]["name"]);

        foreach ($_FILES["pictures"]["error"] as $key => $error) {
            if ($error == "UPLOAD_ERR_OK") {
                $tmp_name = $_FILES["pictures"]["tmp_name"][$key];
                // basename() может спасти от атак на файловую систему;
                // может понадобиться дополнительная проверка/очистка имени файла
                $name = basename($_FILES["pictures"]["name"][$key]);
                move_uploaded_file($tmp_name, "../upload_src/$name");
                $sql = "INSERT INTO images (photo_name, id_album) VALUES ('" . $_FILES["pictures"]["name"][$key] . "','" . (int)$_POST['albumId'][0]  . "');";
                
                if ($link->query($sql) === TRUE) {
                        $ok++;
                } else {
                   
                }

            }
        
        }
        if($ok === $allFiles){
            header("Location:admin.html");
        }else{
            echo "<h1>Что-то пошло не так!</h1><br/>Попробуйте еще раз или свяжитесь с администратором!<br/><a href='admin.html'><button>НАЗАД</button></a>";
        }
        mysqli_close($link);
    }
}else{
    echo("Нет доступа!");
}

?>