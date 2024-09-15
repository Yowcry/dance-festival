<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];

    $to = "indonesiadancefestival@gmail.com";
    $subject = "New Registration for Indonesia International Dance Festival";
    $message = "Name: " . $name . "\nEmail: " . $email;
    $headers = "From: no-reply@yourdomain.com\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for registering! We have received your information.";
    } else {
        echo "There was a problem sending your registration. Please try again later.";
    }
}
?>
