<?php 


//backend/api.php

ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);


// Headers
header('Content-Type: application/json');


// Require config and controller
require_once __DIR__ . '/config/databse.php';
require_once __DIR__ . '/controllers/bookController.php';


// Parse request
$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$path = parse_url($uri, PHP_URL_PATH);
$segments = explode('/', trim($path, '/'));


// Route: /api.php/books or /api.php/books/{id}
if (isset($segments[2]) && $segments[2] === 'books') {

    if ($method === 'GET') {
        handleGet($connexion);

    } elseif ($method === 'POST') {
        handlePost($connexion);

    } elseif ($method === 'PUT' && isset($segments[3])) {
        handlePut($connexion,(int) $segments[3]);

    } elseif ($method === 'DELETE' && isset($segments[3])) {
        handleDelete($connexion, (int) $segments[3]);

    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }
    
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}