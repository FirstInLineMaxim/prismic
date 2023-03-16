<?php

declare(strict_types=1);
// example code
function get_zahlen($custom = 0)
{
    (int) $zahl = 50;
    //checks if its in an integer
    var_dump(is_int($zahl));


    for ($x = 0; $x < 3; $x++) {
        //adds 25 % of the $custom
        $zahl = $zahl +  ($custom * 0.25);
        $custom = $custom - ($custom * 0.25);
        var_dump($custom);
    }
    //round up to in but still float ? 
    (int) $zahl = round(($zahl), 0);

    $newArray = array($zahl, 3);
    $newArray[2] = ($zahl / $newArray[1]);
    //Returns array 
    // print_r($newArray);

    return $newArray;
}

//function to check if return works
function printArray($stuff){
   print_r($stuff);
}

$zahlenFunktion = get_zahlen(30);

printArray(get_zahlen(30));

echo $zahlenFunktion[1] + $zahlenFunktion[2];
 ;