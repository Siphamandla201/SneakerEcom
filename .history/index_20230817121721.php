<?php

$connection = mysqli_connect('localhost', 'root', '', 'products');

$sql = mysqli_query($connection, "SELECT * FROM products");

$results = mysqli_fetch_all($sql, MYSQLI_ASSOC);



?>