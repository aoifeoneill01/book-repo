
<?php

include '../includes/db-connect.php';

// UPDATE LIBRARY LIST
if(isset($_POST['submit-edit'])) {

foreach ($_POST['id'] as $key => $thisId) {
    $id = $thisId . ",";
    $createlist = mysqli_real_escape_string($conn, $_POST['createlist']);

    $queryUpdate = "UPDATE user_library SET createlist = '$createlist' WHERE id = '$id'";
    //check query connection
    if(mysqli_query($conn, $queryUpdate)) {
     header('Location: ../profile/library.php');
    } else {
     echo 'Update request error';
     echo $id;
   }
 }
}

// DELETE LIBRARY LIST
if(isset($_POST['delete-edit'])) {

  foreach ($_POST['id'] as $key => $thisId) {
      $id = $thisId . ",";

$queryDelete = "DELETE FROM user_library WHERE id = '$id'";

//check query connection
if(mysqli_query($conn, $queryDelete)) {
 header('Location: ../profile/library.php');
} else {
 echo 'Delete request error';
  }
  
 }
}

 ?>
