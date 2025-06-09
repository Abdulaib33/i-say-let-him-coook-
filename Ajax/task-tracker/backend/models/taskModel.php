<?php

function getAllTasks($pdo) {
    $stmt = $pdo->query("SELECT * FROM tasks ORDER BY id DESC");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function addTask($pdo, $title) {
    $stmt = $pdo->prepare("INSERT INTO tasks (title) VALUES (:title)");
    $stmt->execute(['title' => $title]);
}

function updateTask($pdo, $id, $title) {
    $stmt = $pdo->prepare("UPDATE tasks SET title = :title WHERE id = :id");
    $stmt->execute(['id' => $id, 'title' => $title]);
}

function deleteTask($pdo, $id) {
    $stmt = $pdo->prepare("DELETE FROM tasks WHERE id = :id");
    $stmt->execute(['id' => $id]);
}
