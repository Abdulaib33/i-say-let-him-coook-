<?php 

// controllers/userController.php


require_once __DIR__ . '/../models/userModel.php';


function handleGet($pdoConnexion) {
    $users = getAllUsers($pdoConnexion);

    echo json_encode($users);
}


function handlePost($pdoConnexion) {

    $input = json_decode(file_get_contents('php://input'), true);

    if (!isset($input['name'], $input['job'])) {

        http_response_code(400);
        echo json_encode(['error' => "Name and job are required"]);
        return;

    }

    $user = createUser($pdoConnexion, $input['name'], $input['job']);
    echo json_encode($user);

}


function handlePut($pdoConnexion, $id) {

    $input = json_decode(file_get_contents('php://input'), true);
    if (!isset($input['name'], $input['job'])) {

        http_response_code(400);
        echo json_encode(['error' => 'Name and job are required']);
        return;

    }

    $updated = updateUser($pdoConnexion, $id, $input['name'], $input['job']);
    echo json_encode(['updated' => $updated]);

}



function handleDelete($pdoConnexion, $id) {

    $deleted = deleteUser($pdoConnexion, $id);
    echo json_encode(['deleted' => $deleted]);
} 