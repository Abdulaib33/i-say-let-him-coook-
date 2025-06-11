<?php 

// backend/config/databse.php

$host = "localhost";
$dbname = "book_haven";
$dbuser = "root";
$password = "becode";


try {

    $connexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $dbuser, $password);
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {

    die(json_encode(['error' => 'Database connection failed' . $e->getMessage()]));

}

// var_dump($connexion);