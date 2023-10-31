<?php
    extract($_POST);

    ini_set( 'display_errors', 1 );

    error_reporting( E_ALL );

    $destinataire = 'jeebjean@gmail.com';
    // Pour les champs $expediteur / $copie / $destinataire, séparer par une virgule s'il y a plusieurs adresses
    $expediteur = $_POST['email'];

    $objet = 'Message envoyé depuis le site ...'; // Le texte peut être changé

    $headers = "From: $expediteur" . "\r\n" . "Reply-To: $expediteur" . "\r\n" ;
    $headers .= 'Content-type: text/html; charset=UTF-8'."\n";

    $msg =  '<div style="width: 100%;  font-weight: bold;"> 
                    Nom : '.$name.'<br>
                    Email : '.$email.'<br> 
                    Numéro de téléphone : '.$phone.' <br> 
                    subject : '.$subject.' <br>
                    Message : '.$message.'
                </div>';

    if(mail($destinataire, $objet, $msg, $headers)){
        echo "1";
    }else{ // Non envoyé
        echo "2";
    }
?>
