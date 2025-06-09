<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $names = $_POST['names'] ?? '';
    $surname = $_POST['surname'] ?? '';
    $dob = $_POST['date_of_birth'] ?? '';
    $id = $_POST['id_number'] ?? '';
    $gender = $_POST['gender'] ?? '';
    $email = $_POST['email_address'] ?? '';
    $cell = $_POST['cellnumber'] ?? '';
    $alt_cell = $_POST['alternative_cellnumber'] ?? '';
    $address = $_POST['physical_address'] ?? '';
    $emp_status = $_POST['Emp_Status'] ?? '';
    $occupation = $_POST['Occupation'] ?? '';
    $years_exp = $_POST['Years_of_exp'] ?? '';
    $grade = $_POST['Highest_Grade'] ?? '';
    $course = $_POST['Course'] ?? '';
    $course_type = $_POST['course-type'] ?? '';
    $course_price = $_POST['course_price'] ?? '';
    $benefit = $_POST['course_benefit'] ?? '';
    $benefit_price = $_POST['course_benefit_price'] ?? '';
    $total = $_POST['total'] ?? '';

    // Emergency Contact
    $kin_names = $_POST['Kin_Names'] ?? '';
    $kin_surname = $_POST['Kin_Surname'] ?? '';
    $kin_dob = $_POST['Kin_Date_of_Birth'] ?? '';
    $kin_id = $_POST['Kin_ID_Number'] ?? '';
    $kin_gender = $_POST['Kin_Gender'] ?? '';
    $kin_email = $_POST['Kin_Email_Address'] ?? '';
    $kin_cell = $_POST['Kin_CellNumber'] ?? '';
    $kin_address = $_POST['Kin_Physical_address'] ?? '';
    $kin_relationship = $_POST['Relationship'] ?? '';

    // Example: Print it out (for testing purposes only!)
    echo "<h1>Application Received</h1>";
    echo "<p>Thank you, $names $surname. Your application for $course_type has been received.</p>";
    echo "<p>Total Price: R$total</p>";
    // TODO: Save this into a database, send email, etc.
} else {
    echo "Invalid request.";
}
?>
