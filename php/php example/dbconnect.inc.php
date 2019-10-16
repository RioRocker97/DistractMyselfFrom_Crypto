<?php
// Open a new connection to MariaDB server
$link = mysqli_connect('localhost', 'root',
    '', 'my_db2');

// Check database connection
if (mysqli_connect_errno()) {
    die('Connect failed: ' . mysqli_connect_error());
}

mysqli_query($link, "SET NAMES UTF8");
