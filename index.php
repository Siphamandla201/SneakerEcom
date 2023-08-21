<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$connection = mysqli_connect('localhost', 'root', '', 'products');

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['id']) && isset($_POST['quantity'])) {
    // Add to cart functionality
    $product_id = $_POST['id'];
    $quantity = $_POST['quantity'];
    
    $product_id = mysqli_real_escape_string($connection, $product_id);
    $quantity = mysqli_real_escape_string($connection, $quantity);
    
    $cart_query = "SELECT * FROM cart WHERE id = $product_id";
    $cart_result = mysqli_query($connection, $cart_query);
    
    if (mysqli_num_rows($cart_result) > 0) {
        $update_query = "UPDATE cart SET quantity = quantity + $quantity WHERE id = $product_id";
        mysqli_query($connection, $update_query);
    } else {
        $insert_query = "INSERT INTO cart (id, quantity) VALUES ($product_id, $quantity)";
        mysqli_query($connection, $insert_query);
    }
    
    mysqli_close($connection);
    
    $response = array("message" => "Product added to cart successfully");
    echo json_encode($response);
} elseif (isset($_GET['id'])) {
    // Retrieve single sneaker details
    $sneakerId = $_GET['id'];
    $SingleSneakerSql = mysqli_prepare($connection, "SELECT * FROM sneakers WHERE id = ?");
    mysqli_stmt_bind_param($SingleSneakerSql, "i", $sneakerId);
    mysqli_stmt_execute($SingleSneakerSql);
    $SingleSneakerResults = mysqli_stmt_get_result($SingleSneakerSql);
    $sneaker = mysqli_fetch_assoc($SingleSneakerResults);
    exit(json_encode($sneaker));
} else {
    // Retrieve all sneakers
    $sql = mysqli_query($connection, "SELECT * FROM sneakers");
    $results = mysqli_fetch_all($sql, MYSQLI_ASSOC);
    exit(json_encode($results));
}
?>
