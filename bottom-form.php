<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "trushostap@gmail.com"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "PiniandKay@mail.net"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData<br> <b>Имя пославшего:</b> $name <br><b>Телефон:</b> $phone";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center><p class="success">Дякуэмо за звернення
    <br> Наш консультант звяжеться з вами
    </p></center>';
    }
    else 
    {
    echo '<center><p class="fail"><b>Помилка.Спробуйте ще раз</b></p></center>';
    }
} else {
    http_response_code(403);
    echo "Спробуйте ще раз";
}
?>