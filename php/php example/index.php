<?php

require('dbconnect.inc.php');

$query = 'select * from persons';
$result = mysqli_query($link, $query);

// Fetch data
while ($row = mysqli_fetch_assoc($result)) {
    $persons[] = $row;
}

mysqli_close($link);

require('index.view.php');
