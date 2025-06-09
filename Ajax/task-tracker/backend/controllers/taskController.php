<?php 

// backend/controllers/taskController.php


require_once __DIR__ . "/../models/taskModel.php";

function handleGet($pdoConnexion) { 

    $tasks = getAllTasks($pdoConnexion);
    echo json_decode($tasks);

}

function handlePost($pdoConnexion) {

    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['title']) || !isset($data['status'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing title or status']);
        return;
    }

    $id = createTask($pdoConnexion, $data);
    echo json_encode(['message' => 'Task created', 'id' => $id]);

}



function handlePut($pdoConnexion, $id) {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['title']) || !isset($data['status'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing title or status']);
        return;
    }

    $success = updateTask($pdoConnexion, $id, $data);
    echo json_encode(['message' => $success ? 'Task updated' : 'Update failed']);
}



function handleDelete($pdoConnexion, $id) {

    $success = deleteTask($pdoConnexion, $id);
    echo json_encode(['message' => $success ? 'task delete' : 'failed delete']);

}