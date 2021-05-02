<?php

require '../../includes/db-connect.php';

$getUser = "SELECT usersId, usersEmail, usersName FROM users";

$saveUser = mysqli_query($conn, $getUser);

$query = mysqli_fetch_all($saveUser, MYSQLI_ASSOC);

echo json_encode($query);

?>