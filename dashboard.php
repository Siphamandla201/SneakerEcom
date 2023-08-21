<?php
// Assume you have already established a database connection
$connection = mysqli_connect("localhost", "root", "", "products");

session_start(); // Start the session to access user data

if (isset($_SESSION['user_id'])) {
    $userId = $_SESSION['user_id'];

    // Query the database to fetch user data based on $userId
    $sql = "SELECT * FROM users WHERE user_id = '$userId'";
    $result = mysqli_query($connection, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $userData = mysqli_fetch_assoc($result);

        // Return the user data as JSON
        header('Content-Type: application/json');
        echo json_encode($userData);
    } else {
        // No user found, handle accordingly
        http_response_code(404); // Not Found status code
        echo json_encode(array('error' => 'User not found'));
    }
} else {
    // Not logged in, handle accordingly
    http_response_code(401); // Unauthorized status code
    echo json_encode(array('error' => 'Not logged in'));
}

// Close the database connection
mysqli_close($connection);
?>
