<?php 

//backend/controllers/bookController.php


require_once __DIR__  . "/../models/bookModel.php";


function handleGet($connexion) {
    $books = getAllBooks($connexion);
    echo json_encode($books);
}