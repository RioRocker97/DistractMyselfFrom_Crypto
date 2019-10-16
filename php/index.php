<?php
    require('dbconnect.inc.php');
    $query = 'select name from persons ' ;
    $result = mysqli_query($link,$query);

    while($row = mysqli_fetch_array($result)){
        $persons[] = $row;
    }

    mysqli_close($link);
    require('index.view.php');