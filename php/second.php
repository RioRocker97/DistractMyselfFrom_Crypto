<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <?php echo "Hello World. This is my PHP script<br><br>" ; 
        
        $a = 10.4895147420;
        $b = .721481;
        $c = $a + $b;

        echo "A plus B equal $c <br>" ;

        for($i = 0; $i <=10; $i++){
            for($j =0 ; $j <=$i; $j++) echo "*";
            echo "<br>";
        }
        for($i = 10; $i >=0; $i--){
            for($j =0 ; $j <=$i; $j++) echo "*";
            echo "<br>";
        }
    ?>
</body>
</html>
