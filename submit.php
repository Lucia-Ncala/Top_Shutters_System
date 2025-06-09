<?php
require_once 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Applicant Info
    $names = $_POST['names'] ?? '';
    $surname = $_POST['surname'] ?? '';
    $dob = $_POST['date_of_birth'] ?? '';
    $id_number = $_POST['id_number'] ?? '';
    $gender = $_POST['gender'] ?? '';
    $email = $_POST['email_address'] ?? '';
    $cell = $_POST['cellnumber'] ?? '';
    $alt_cell = $_POST['alternative_cellnumber'] ?? '';
    $address = $_POST['physical_address'] ?? '';

    // Work Details
    $emp_status = $_POST['Emp_Status'] ?? '';
    $occupation = $_POST['Occupation'] ?? '';
    $years_exp = $_POST['Years_of_exp'] ?? '';
    $highest_grade = $_POST['Highest_Grade'] ?? '';
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

    try {
        // Insert into applicants
        $stmt = $pdo->prepare("
            INSERT INTO applicants (names, surname, date_of_birth, id_number, gender, email_address, cellnumber, alternative_cellnumber, physical_address)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");
        $stmt->execute([$names, $surname, $dob, $id_number, $gender, $email, $cell, $alt_cell, $address]);
        $applicant_id = $pdo->lastInsertId();

        // Insert into work_details
        $stmt = $pdo->prepare("
            INSERT INTO work_details (applicant_id, emp_status, occupation, years_of_exp, highest_grade, course_applied_for)
            VALUES (?, ?, ?, ?, ?, ?)
        ");
        $stmt->execute([$applicant_id, $emp_status, $occupation, $years_exp, $highest_grade, $course]);

        // Insert into kin table
        $stmt = $pdo->prepare("
            INSERT INTO kin (applicant_id, names, surname, date_of_birth, id_number, gender, email_address, cellnumber, physical_address, relationship)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");
        $stmt->execute([$applicant_id, $kin_names, $kin_surname, $kin_dob, $kin_id, $kin_gender, $kin_email, $kin_cell, $kin_address, $kin_relationship]);

        echo "Submission successful!";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    echo "Invalid request.";
}
?>
