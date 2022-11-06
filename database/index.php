<?php
require 'functions.php';
$connection = dbConnect();

$result = $connection->query(' SELECT * FROM `markant`'); 

echo 'hello';

?>


