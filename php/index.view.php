<!DOCTYPE html>
<html lang="en">
<style>
    table {
        width : 80%;
    }
    table, th, td {
        border: 2px solid black;
        border-collapse: collapse;
        padding : 3px;
    }
    th{
        background-color: #0078BD;
    }
    tr:nth-child(even) {background-color:#FFEECF;}
    tr:nth-child(odd) {background-color:#CCE2A1;}
</style>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
    echo '<table>';
        echo '<tr>';
            echo '<th> ID </th>';
            echo '<th> Name </th>';
            echo '<th> Surname </th>';
            echo '<th> Email </th>';
            echo '<th> Phone </th>';
    echo '</tr>';
    foreach($result as $person){
        echo '<tr>';
            echo '<td>' . $person['id'] . '</td>' ;
            echo '<td>' . $person['name'] . '</td>' ;
            echo '<td>' . $person['surname'] . '</td>' ;
            echo '<td>' . $person['email'] . '</td>' ;
            echo '<td>' . $person['phone'] . '</td>' ;
        echo '</tr>';

    }
    echo '</table>';
    ?>

</body>
</html>
