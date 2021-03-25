<?php

require 'db-connect.php';

$retrieve = 'SELECT * FROM addnote';

$save = mysqli_query($conn, $retrieve);

$query = mysqli_fetch_all($save, MYSQLI_ASSOC);

echo json_encode($query);

 ?>
