<?php 

//backend/controllers/bookController.php


require_once __DIR__  . "/../models/bookModel.php";


function handleGet($connexion) {
    $books = getAllBooks($connexion);
    echo json_encode($books);
}


function handlePost($connexion) {

    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['title'], $data['author'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing data']);
        return;
    }   

    addBook($connexion, $data['title'], $data['authro']);
    http_response_code(201);
    echo json_encode(['message' => 'Book added']);

}



function handlePut($connexion, $id) {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['title'], $data['author'])) {
        http_response_code(400);
        echo json_encode(['error' => 'missing data']);
        return;
    }

    updateBook($connexion, $id, $data['title'], $data['author']);
    http_response_code(201);
    echo json_encode(['message' => 'Book Updated']);
}



function handleDelete($connexion, $id) {

    deleteBook($connexion, $id);
    echo json_encode(['message' => 'book deleted']);

}