<?php 
    $data = json_decode(file_get_contents("php://input"), true);
    
    if($data['kind'] === 'PHOTO'){
        $photo_id = $data['kind_id'];
        require_once 'connection.php';

        $link = mysqli_connect($host, $user, $password, $database) 
        or die("Ошибка " . mysqli_error($link));
        $ok = 0;
        if($link){
            foreach ($photo_id as &$id) {
                $sql = "DELETE FROM images WHERE id=".$id.";";
                if ($link->query($sql) === TRUE) {
                     $ok = $ok + 1;
                } else {
                    $ok = $ok - 1;
                }
            }
            print_r(json_encode($ok));
        }
    }

    if($data['kind'] === 'ALBUM'){
        $id_album = $data['kind_id'];
        require_once 'connection.php';

        $link = mysqli_connect($host, $user, $password, $database) 
        or die("Ошибка " . mysqli_error($link));

        if($link){
                $ok = 0;

                $sqlI = "DELETE FROM images WHERE id_album=".$id_album.";";
                if ($link->query($sqlI) === TRUE) {
                    $ok = $ok + 1;
                } else {
                   $ok = $ok - 1;
                }

                $sqlA = "DELETE FROM albums WHERE id_album=".$id_album.";";
                if ($link->query($sqlA) === TRUE) {
                    $ok = $ok + 1;
                } else {
                   $ok = $ok - 1;
                }
            
                print_r(json_encode($ok));

        }
    }

if($data['kind'] === 'NEWS'){
    $id_news = $data['kind_id'];
    require_once 'connection.php';

    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));

    if($link){
        $ok = 0;
        $sqlA = "DELETE FROM news WHERE id=".$id_news.";";
        if ($link->query($sqlA) === TRUE) {
            $ok = $ok + 1;
        } else {
            $ok = $ok - 1;
        }

        print_r(json_encode($ok));

    }
}
?>