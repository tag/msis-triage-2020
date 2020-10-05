<?php

require 'common.php';

//Only need this line if creating GUIDs
use Ramsey\Uuis\Uuid;

// Step 0: Validate the incoming data
// This code doesnt do that, but should....
// For example, if the data is empty or bad, this insert fails

// As a part of this step, create a new GUID to use as primary key suitable for cross-system used

$guid = Uuid::uuid4()->toString();

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Patient';
$vars = [];

if (isset($_GET['guid'])) {
  $sql = 'SELECT * FROM Patient WHERE patientGuid = ?';
  $vars = [ $_GET['guid'] ];
}

$stmt = $db->prepare(
  'INSERT INTO Patient (patientGuid, firstName, lastName, dob, sexAtBirth)
  VALUES (?, ?, ?, ?, ?)'
);

$stmt->execute([
  $guid,
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['DOB'],
  $_POST['sexAtBirth'],
]);

// If needed, get auto-generated PK from DB
// $pk = $db->LastInsertId();

$patients = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output

header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid=' . $guid);
// // header('Content-Type: application/json');
// echo $json;
