<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <?php echo "Hello World. This is my PHP script<br><br>" ; 

        $abc = "Hello";
        $pharsel = "$abc 2 world";
        echo "$pharsel<br>" ;
        
        $pharsel2 = "$abc 3 world";
        echo "$pharsel2<br>" ;

        $name = 'ChangNoi';
        $surname = 'Yamsri';
        $fullname  = $name.' '.$surname;
        echo "Hello. My name is $fullname<br><br><br>";
        
        $a = 10;
        $b  = $a--;
        echo 'B is '. $b ."<br>\n" ;
        echo 'A is '. $a .'<br><br>';

        $b  = ++$a;
        echo 'B is '. $b .'<br>' ;
        echo 'A is '. $a ;

        
    ?>
</body>
</html>
