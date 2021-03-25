<?php

include 'db-connect.php';

// Select all from database
$data = 'SELECT * FROM library';

// Save above data through our connection
$result = mysqli_query($conn, $data);

// Save results as an array
$list = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Put in JSON format
echo json_encode($list);

 ?>
