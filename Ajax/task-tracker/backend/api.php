<?php

// backend/api.php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

// === Setup ===
require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/controllers/taskController.php';

// === Parse URI dynamically ===
$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$path = parse_url($uri, PHP_URL_PATH);
$segments = explode('/', trim($path, '/'));

// === Find api.php index ===
$apiIndex = array_search('api.php', $segments);
$resource = $segments[$apiIndex + 1] ?? null;
$id = $segments[$apiIndex + 2] ?? null;

// === Routing ===
if ($resource === 'tasks') {
    switch ($method) {
        case 'GET':
            handleGet($pdoConnexion);
            break;
        case 'POST':
            handlePost($pdoConnexion);
            break;
        case 'PUT':
            handlePut($pdoConnexion, (int)$id);
            break;
        case 'DELETE':
            handleDelete($pdoConnexion, (int)$id);
            break;
        default:
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
    }
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}
