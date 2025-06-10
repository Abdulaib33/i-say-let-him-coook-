<?php 

// backend/models/bookModel.php


function getAllBooks($connexion) {

    $stmt = $connexion->query(" SELECT * FROM books ORDER BY id DESC");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);

}


function addBook($connexion, $title, $author) {

    $stmt = $connexion->prepare("INSERT INTO books (title, author) VALUES (:title, :author)");
    $stmt->execute([
        ':title' => $title,
        ':author' => $author
    ]);

    return $connexion->lastInsertId();
}



function updateBook($connexion, $id, $title, $author) {

    $stmt = $connexion->prepare("UPDATE books SET title = :title, author = :author WHERE id = :id");

    return $stmt->execute([
        ':title' => $title,
        ':author' => $author,
        ':id' => $id
    ]);

}



function deleteBook($connexion, $id) {

    $stmt = $connexion->prepare("DELETE FROM books WHERE id = :id");
    return $stmt->execute([
        ':id' => $id
    ]);

}