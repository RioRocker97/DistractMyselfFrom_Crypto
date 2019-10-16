<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <?php echo "Hello World. This is my PHP script<br><br>" ; 
    //ARRAY
    
    $a = array('red', 'green' , 'blue');
    echo $a[0] . '<br>';
    echo $a[1] . '<br>';
    echo $a[2] . '<br><br>';
    echo $a[0] . ' ' . $a[1] . ' ' . $a[2] . '<br><br>';

    //use print_r and var_dump to see type , name , content of variable 
    //var_dump is way more specific than print_r
    echo '<pre>';
    print_r($a);
    echo '</pre><br>';
    echo '<pre>';
    var_dump($a);
    echo '</pre>';

    $a2[0] = 1;
    $a2[2] = 7;
    echo '<pre>';
    print_r($a2);
    echo '</pre>';

    $a3 = ['a', 'b', 'c','d','e','f','gun'];
    $a4 = [];

    echo '<pre>';
    var_dump($a3);
    echo '</pre>';
    // foreach is like loop FOR and very useful for getting contents out of array variable 
    foreach ($a3 as $val){
        echo $val .'<br>';
    }
    echo '<br>';
    //$key is KEYWORD . use as an ID for each content in array 
    // => operator to use as $key
    foreach ($a3 as $key => $val){
        echo $key . '='.$val .'<br>';
    }
    echo '<br>';
    $animal = ['red' => 'bear', 'blue' => 'fish' , 'green' => 'Grass hopper'];
    foreach ($animal as $key => $val){
        echo $key . '='.$val .'<br>';
    }
    echo '<br>';
    $car = ['red' => 'Mustang', 'blue' => 'Bugatti' , 'green' => 'Porsche 911'];
    foreach ($car as $key => $val){
        echo $key . '='.$val .'<br>';
    }
    ////////////////////////////////////// Mutiple dimension Array /////////////////////
    $a5[0][0] = 'a';
    $a5[0][1] = 'b';
    $a5[1][0] = 'c';
    $a5[1][1] = 'd';
    echo '<pre>';
    var_dump($a5);
    echo '</pre>';
    $plane = ['WWI' => 'Red Baron' , 'WWII' => 'Spitfire' , 'Cold War' => 'Afteburner Jet'];
    $data = ['plane' => $plane,'car' => $car , 'animal' => $animal];
    echo '<pre>';
    var_dump($data);
    echo '</pre>';
    // use foreach to output every element in $data
    foreach($data as $key => $val){
        if($key != 'car'){
        echo '<b>'.$key.':</b><br>';
        foreach($val as $key2 => $val2) echo $key2.' = '.$val2 .'<br>' ; 
        echo '<br>';
        }
    }

    ?>


</body>
</html>
