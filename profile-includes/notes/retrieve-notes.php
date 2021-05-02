<?php

require '../../includes/db-connect.php';

$retrieve = 'SELECT * FROM add_note';

$save = mysqli_query($conn, $retrieve);

$query = mysqli_fetch_all($save, MYSQLI_ASSOC);

echo json_encode($query);

 ?>
