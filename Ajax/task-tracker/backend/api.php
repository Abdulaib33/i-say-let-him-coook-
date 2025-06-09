<?php 

// backend/api.php


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);


header('Content-Type: application/json');


require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/controllers/taskController.php';


$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$path = parse_url($uri, PHP_URL_PATH);
$segments = explode('/', trim($path, '/'));

if ($segments[0] === 'backend' && $segments[1] === 'api.php' && $segments[2] === 'tasks') {

    if ($method === 'GET') {
        handleGet($pdoConnexion);
    } elseif ($method === 'POST') {
        handlePost($pdoConnexion);
    } elseif ($method === 'PUT' && isset($segments[3])) {
        handlePut($pdoConnexion, (int)$segments[3]);
    } elseif ($method === 'DELETE' && isset($segments[3])) {
        handleDelete($pdoConnexion, (int)$segments[3]);
    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }

} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not founds']);
}