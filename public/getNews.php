<?php
require_once 'connection.php';

    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));

    if($link){
        $result_events = mysqli_query($link, "SELECT id, title, description, made_date AS date FROM events");
        $result_news = mysqli_query($link, "SELECT id, title, description, made_date AS date FROM news");
        $news_arr = [];
        $events_arr=[];

        while($row = $result_news->fetch_assoc()) {
            $obj = (object) $row;
            array_push($news_arr,$obj);
        }
        while($row = $result_events->fetch_assoc()) {
            $obj = (object) $row;
            array_push($events_arr,$obj);
        }
        $main_arr = [$news_arr, $events_arr];
        print_r(json_encode($main_arr));
        mysqli_close($link);
    }
?>
