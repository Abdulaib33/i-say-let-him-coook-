<?php 

// backend/api.php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/controllers/userController.php';


// Get request method and URI segments
$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$path = parse_url($uri, PHP_URL_PATH);
$segments = explode('/', trim($path, '/'));


// Find index of api.php in the URL
$indexApi = array_search('api.php', $segments);

// If found and next segment is "users"
if ($indexApi !== false && isset($segments[$indexApi + 1]) && $segments[$indexApi + 1] === 'users') {
    
    $id = $segments[$indexApi + 2] ?? null;

    if ($method === 'GET') {
        handleGet($pdoConnexion);
    } elseif ($method === 'POST') {
        handlePost($pdoConnexion);
    } elseif ($method === 'PUT' && $id) {
        handlePut($pdoConnexion, (int)$id);
    } elseif ($method === 'DELETE' && $id) {
        handleDelete($pdoConnexion, (int)$id);
    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }

} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}
