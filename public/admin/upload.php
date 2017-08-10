<?php
$data = json_decode(file_get_contents("php://input"), true);
$kind = $data['kind'];
if($kind === 'NEWS') {
    require_once 'connection.php';

    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));

    if ($link) {

        $title = $data['title'];
        $description = $data['description'];
        $today = date("d-m-Y H:i");

//        print_r($nameAlbum);
        $sql = "INSERT INTO news (title, description, made_date) VALUES ('" . $title . "','" . $description . "','" . $today . "');";
        if ($link->query($sql) === TRUE) {
            print_r(json_encode(true));
        } else {
            print_r(json_encode(false));
        }
        mysqli_close($link);
    }
} elseif($kind === "EVENTS"){
    require_once 'connection.php';

    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));

    if ($link) {

        $title = $data['title'];
        $description = $data['description'];
        $today = date("d-m-Y H:i");

//        print_r($nameAlbum);
        $sql = "INSERT INTO events (title, description, made_date) VALUES ('" . $title . "','" . $description . "','" .
            $today . "');";
        if ($link->query($sql) === TRUE) {
            print_r(json_encode(true));
        } else {
            print_r(json_encode(false));
        }
        mysqli_close($link);
    }
} else {
    header("Location:admin.html");
}
?>