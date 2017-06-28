<?php
   $to = 'stetcukroman@gmail.com';
   if (array_key_exists('fastorder', $_POST)) {

       $subject = 'Быстрый заказ столика!"';
       $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
       $message = "Номер телефона: ".$_POST['fastorder'];
       mail($to, $subject, $message);

   } elseif (array_key_exists('name', $_POST)) {

       $subject = 'Обратная связь!';
       $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
       $message = "Имя: ".$_POST['name']."\nВопрос:\n".$_POST['msg']."\n\nОтвет прислать на: ".$_POST['msgEmail']
       ."\nИли позвонить: ".$_POST['tel'];
       mail($to, $subject, $message);

     } else{
      	     echo ('Не стоило сюда заходить, по тебя уже выехали');
           }

?>
