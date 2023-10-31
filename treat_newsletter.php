<?php
    // Connexion à la base de données
    $conn = mysqli_connect("localhost", "trashcancare", "trashcancare23", "trashcancare");
    // "trashcancare'@'%", "trashcancare23", "trashcancare'@'%"

//    $today = strtotime(date("Y/m/d"));
    $email = $_POST['email'];

    $sql = "INSERT INTO newsletter(email) VALUES ('$email')";

//    echo $today;

    if (mysqli_query($conn, $sql)) {
        echo "1";
    } else {
        echo "2";
    }
?>