<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <?php echo "Hello World. This is my PHP script<br><br>" ; 
    //If-else statement
    $a = 5;
    if($a == 5) echo 'It 5 ';
    else echo 'it not .' ;
    echo '<br>';
    //While loop
    $k = 1;
    while($k <=10){
        echo '  ECHO!';
        $k++;
    }
    //for loop
    echo '<br><br><br>';
    for($i = 0; $i <=10; $i++){
        for($j =0 ; $j <=$i; $j++) echo "*";
        echo "<br>";
    }
    for($i = 9; $i >=0; $i--){
        for($j =0 ; $j <=$i; $j++) echo "*";
        echo "<br>";
    }
    ?>


</body>
</html>
