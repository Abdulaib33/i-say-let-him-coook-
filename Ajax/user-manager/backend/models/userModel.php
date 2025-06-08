<?php 

// models/userModel.php

function getAllUsers($pdoConnexion) {

    $stmt = $pdoConnexion->query(
        "SELECT *
         FROM users
         ORDER BY id DESC "
    );
    return $stmt->fetchAll(PDO::FETCH_ASSOC);

}


function createUser($pdoConnexion, $name, $job) {

    $stmt = $pdoConnexion->prepare("
        INSERT INTO users (name, job) VALUES (?, ?)
    ");
    $stmt->execute([$name, $job]);
    return ['id' => $pdoConnexion->lastInsertId(), 'name' => $name, 'job' => $job];
}


function updateUser($pdoConnexion, $id, $name, $job) {

    $stmt = $pdoConnexion->prepare("
        UPDATE users SET name = ?, job = ? WHERE id = ?
    ");
    $stmt->execute([$name, $job, $id]);
    return $stmt->rowCount();
}



function deleteUser($pdoConnexion, $id) {

    $stmt = $pdoConnexion->prepare("
        DELETe FROM users WHERE id = ?
    ");

    $stmt->execute([$id]);
    return $stmt->rowCount();

}