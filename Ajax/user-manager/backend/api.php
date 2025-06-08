<?php 

// backend/api.php



header('Content-Type: application/json');

require_once "../backend/config/database.php";
require_once "../backend/controllers/userController.php";



// Get request method and path
$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$path = parse_url($uri, PHP_URL_PATH);
$segments = explode('/', trim($path, '/'));


// Route: /api.php/users or /api.php/users{id}

if ($segments[0] === 'api.php' && $segments[1] === 'users') {

    if ($method === 'GET') {
        handleGet($pdoConnexion);
    } elseif ($method === 'POST') {
        handlePost($pdoConnexion);
    } elseif ($method === 'PUT' && isset($segments[2])) {
        handlePut($pdoConnexion, (int)$segments[2]);
    } elseif ($method === 'DELETE' && isset($segments[2])) {
        handleDelete($pdoConnexion, (int)$segments[2]);
    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }

} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}