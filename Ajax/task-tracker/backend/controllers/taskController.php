<?php

require_once __DIR__ . '/../models/taskModel.php';

function handleGet($pdo) {
    echo json_encode(getAllTasks($pdo));
}

function handlePost($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!isset($data['title']) || !$data['title']) {
        http_response_code(400);
        echo json_encode(['error' => 'Title is required']);
        return;
    }
    addTask($pdo, $data['title']);
    echo json_encode(['message' => 'Task added']);
}

function handlePut($pdo, $id) {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!isset($data['title']) || !$data['title']) {
        http_response_code(400);
        echo json_encode(['error' => 'Title is required']);
        return;
    }
    updateTask($pdo, $id, $data['title']);
    echo json_encode(['message' => 'Task updated']);
}

function handleDelete($pdo, $id) {
    deleteTask($pdo, $id);
    echo json_encode(['message' => 'Task deleted']);
}
