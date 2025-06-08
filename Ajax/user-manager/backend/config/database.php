<?php 
// config/database.php


$host = 'localhost';
$dbname = "user_manager";
$username = "root";
$password = "becode";

try {

    $pdoConnexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdoConnexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {

    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed :' . $e->getMessage()]);
    exit();

}