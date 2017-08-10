<?php 
// hash - генератор;
function generateCode($length=6) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI JKLMNOPRQSTUVWXYZ0123456789";
    $code = "";
    $clen = strlen($chars) - 1;
    while (strlen($code) < $length) {
        $code .= $chars[mt_rand(0,$clen)];
    }
    return $code;
}

if($_GET['kind'] === "LOGIN") {
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));

    if ($link) {
        $userPassword = $_GET['pass'];
        $userLogin = $_GET['log'];
        $result = mysqli_query($link, "SELECT user_id, user_password FROM users WHERE user_login='" . mysqli_real_escape_string($link, $userLogin) . "' LIMIT 1");
        $data = mysqli_fetch_assoc($result);
//         print_r(json_encode($data));
        if ($data['user_password'] === md5(md5($userPassword))) {
            $hash = md5(generateCode(10));
            mysqli_query($link, "UPDATE users SET user_hash='" . $hash . "' WHERE user_id='" . $data['user_id'] . "'");
            setcookie("id", $data['user_id'], time() + (86400 / 2));
            setcookie("name", $userLogin, time() + (86400 / 2));
            setcookie("hash", $hash, time() + (86400 / 2));
            print_r(json_encode([true]));
            exit();
        }
        mysqli_close($link);
    } else {
        print_r(json_encode('proverka'));

    }
}
if($_GET['kind'] === "HASH") {
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));

    if($link){

        $userHash = $_GET['pass'];
        $userId = $_GET['log'];

        $result = mysqli_query($link, "SELECT user_hash FROM users WHERE user_id=" . $userId . " LIMIT 1;");
        $data = mysqli_fetch_assoc($result);
        // print_r(json_encode([$data['user_hash'],$userHash, $userId]));
        if($data['user_hash'] === $userHash){
            print_r(json_encode([true]));
        }else{
            print_r(json_encode([false]));
        }
        mysqli_close($link);
    }else {
        print_r(json_encode('proverka'));

    }
}
?>
