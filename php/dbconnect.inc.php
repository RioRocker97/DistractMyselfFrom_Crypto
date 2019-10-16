<?php
    echo 'Here is my php file for fetching table in my Database<br><br><br>';
    $link = mysqli_connect('localhost','root','','my_db2');

    if(mysqli_connect_error()){ die('Connect failed : ' .mysqli_connect_error());}
    else echo 'Database is connected . Cool and good2<br><br>';

    mysqli_query($link,"SET NAMES UTF8");
