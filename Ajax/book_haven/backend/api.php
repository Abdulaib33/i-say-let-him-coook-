<?php 
// backend/api.php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); // ❌ Typo fixed here: "erros" -> "errors"
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

// ✅ Automatically find the position of 'api.php' to support flexible folder structure
$apiIndex = array_search('api.php', $segments);

if ($apiIndex !== false && isset($segments[$apiIndex + 1]) && $segments[$apiIndex + 1] === 'books') {
    // Get the optional ID if provided
    $id = $segments[$apiIndex + 2] ?? null;

    if ($method === 'GET') {
        handleGet($connexion);

    } elseif ($method === 'POST') {
        handlePost($connexion);

    } elseif ($method === 'PUT' && $id !== null) {
        handlePut($connexion, (int)$id);

    } elseif ($method === 'DELETE' && $id !== null) {
        handleDelete($connexion, (int)$id);

    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }

} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}
