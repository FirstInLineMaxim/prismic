<?php
// example code
function get_zahlen($custom = 0) {

    (int) $zahl = 50;
    //checks if its in an integer
    var_dump(is_int($zahl));
    
    
    for ($x = 0; $x < 3; $x++) {
        //adds 25 % of the $custom
    $zahl=$zahl +  ($custom*0.25);
    }
    echo "$zahl";
    }
    
    get_zahlen(12);
    