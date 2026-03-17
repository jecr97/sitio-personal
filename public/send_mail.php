<?php
header('Content-Type: application/json; charset=utf-8');

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    echo json_encode(['ok' => false, 'error' => 'invalid_json']);
    http_response_code(400);
    exit;
}

$name = isset($input['name']) ? trim($input['name']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$message = isset($input['message']) ? trim($input['message']) : '';

if (!$name || !$email || !$message) {
    echo json_encode(['ok' => false, 'error' => 'missing_fields']);
    http_response_code(400);
    exit;
}

// Destination email (change to your address)
$to = 'tu@correo.com';

// Try PHPMailer if available (recommended). Otherwise fallback to mail().
if (class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
    try {
        $mail = new PHPMailer\\PHPMailer\\PHPMailer(true);
        // If you want to use SMTP, configure these environment vars or edit directly
        $useSmtp = getenv('SMTP_HOST') ? true : false;
        if ($useSmtp) {
            $mail->isSMTP();
            $mail->Host = getenv('SMTP_HOST');
            $mail->SMTPAuth = true;
            $mail->Username = getenv('SMTP_USER');
            $mail->Password = getenv('SMTP_PASS');
            $mail->SMTPSecure = getenv('SMTP_SECURE') ?: 'tls';
            $mail->Port = getenv('SMTP_PORT') ?: 587;
        }

        $mail->setFrom(getenv('SMTP_FROM') ?: ($mail->Username ?? 'no-reply@localhost'), 'Contacto web');
        $mail->addAddress($to);
        $mail->Subject = "Mensaje desde sitio: {$name}";
        $body = "Nombre: {$name}\nEmail: {$email}\n\nMensaje:\n{$message}";
        $mail->Body = $body;
        $mail->send();

        echo json_encode(['ok' => true]);
        exit;
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => 'phpmailer_error', 'message' => $e->getMessage()]);
        exit;
    }
} else {
    // Fallback to mail() — may require server mail configured (XAMPP needs setup)
    $subject = "Mensaje desde sitio: {$name}";
    $body = "Nombre: {$name}\nEmail: {$email}\n\nMensaje:\n{$message}";
    $headers = "From: {$email}\r\n" .
               "Reply-To: {$email}\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['ok' => true]);
        exit;
    } else {
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => 'mail_failed']);
        exit;
    }
}

?>
