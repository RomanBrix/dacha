<?php
    $id = $_GET['id'];
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));

    if ($link) {
        $result = mysqli_query($link, "SELECT * FROM images WHERE id_album='" .$id."'");
        // $data = mysqli_fetch_assoc($result);
        // print_r($data);
        if ($result) {
            $main_arr = [];
            while ($row = $result->fetch_assoc()) {
                $obj = (object)$row;
                // print_r($obj);
                array_push($main_arr, $obj);
                // echo "id: " . $row["user_id"]. " - Login: " . $row["user_login"]. "; Pass: " . $row["user_password"]. "<br>";
            }
            print_r(json_encode($main_arr));
        }
        mysqli_close($link);
    }
?>