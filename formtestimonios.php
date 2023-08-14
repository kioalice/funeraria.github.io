<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';



    $mensaje = null;
    $nombre = $_POST['nombre'];
    $mensaje = $_POST['mensaje'];
    $estrellas = $_POST['estrellas'];
     // Validar 
    $respuestas = $_POST['estrellas'];
         
            
            // create a new object
            $mail = new PHPMailer();
            // configure an SMTP
        try{
            $mail->SMTPDebug = 0;                      // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.office365.com';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'funerariaibanez@outlook.com';                     // SMTP username
            $mail->Password   = 'elpotro1970';                               // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;                                    // TCP port to connect to

            //Recipients
            $mail->setFrom('funerariaibanez@outlook.com', 'Funeraria Ibanez');
            $mail->addAddress('info@funerariaibanez.cl', 'Info Funeraria Ibanez'); 
            $mail->Subject = 'Tienes un Nuevo Mensaje';
            // Set HTML 
            $mail->isHTML(true);
            $mail->CharSet = 'UTF-8'; 

            $contenido = '<html>';
            $contenido .= "<p><strong>Has Recibido un Testimonio:</strong></p>";
            $contenido .= "<p>Nombre: " . $nombre . "</p>";
            $contenido .= "<p>Mensaje: " . $mensaje . "</p>";
            $contenido .= "<p>Ha enviado: " . $respuestas['estrellas'] . " Estrellas!</p>";



            $contenido .= '</html>';


            $mail->Body = $contenido;
            $mail->AltBody = 'Esto es texto alternativo';


            $rta = $mail->send();

            //var_dump($rta);
            header("Location: gracias.html" );
        } catch (Exception $e) {
           header("Location: error.html" );
        }

       


               
      
             
           
        

       
        

