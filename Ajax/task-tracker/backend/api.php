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
    
}