<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $connection = mysqli_connect("localhost", "root", "", "products");
    
    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    if (isset($_POST["register"])) {
        // Registration
        $username = $_POST["username"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        
        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
        // Insert user data into the users table
        $query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashedPassword')";
        
        if (mysqli_query($connection, $query)) {
            $response = array("message" => "Registration successful");
            echo json_encode($response);
        } else {
            echo "Error: " . mysqli_error($connection);
        }
    } elseif (isset($_POST["login"])) {
        // Login
        $usernameOrEmail = $_POST["usernameOrEmail"];
        $password = $_POST["password"];

        // Retrieve user data from the users table based on username or email
        $query = "SELECT userId, username, password FROM users WHERE username = '$usernameOrEmail' OR email = '$usernameOrEmail'";
        $result = mysqli_query($connection, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $user = mysqli_fetch_assoc($result);
            $storedPassword = $user["password"];

            // Verify entered password against stored hashed password
            if (password_verify($password, $storedPassword)) {
                // Successful login
                session_start();
                $_SESSION["userId"] = $user["id"];
            } else {
                echo "Invalid credentials";
            }
        } else {
            echo "User not found";
        }
    }

    mysqli_close($connection);
}
?>
