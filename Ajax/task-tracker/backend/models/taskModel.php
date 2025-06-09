<?php 

// backend/models/taskModel.php


function getAllTasks($pdoConnexion) {
    $stmt = $pdoConnexion->query("
            SELECT *
            FROM tasks
            ORDER BY id DESC
    ");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}



function createTask($pdoConnexion, $data) {
    $stmt = $pdoConnexion->prepare("
        INSERT INTO tasks (title, status) 
        VALUES (:title, :status)
    ");

    $stmt->execute([
        ':title' => $data['title'],
        ':status' => $data['status']
    ]);

    return $pdoConnexion->lastInsertId();
}



function updateTask($pdoConnexion, $id, $data) {
    $stmt = $pdoConnexion->prepare("
        UPDATE tasks SET title = :title,
               status = :status
               WHERE id = :id
    ");

    return $stmt->execute([
        ":title" => $data['title'],
        ":status" => $data['status'],
        ":id" => $id
    ]);
}



function deleteTask($pdoConnexion, $id) {
    $stmt = $pdoConnexion->prepare("
        DELETE FROM tasks 
        WHERE id = :id
    ");
    return $stmt->execute([
        ':id' => $id
    ]);
}