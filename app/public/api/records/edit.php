<?php

require 'common.php';
//Step 0; Validate data
$db = DbConnection::getConnection();

$stmt = $db->prepare(
'UPDATE Person SET first_name=?, last_name=?, gender=?, street_address=?, city=?, state=?, zipcode=?, phone=?, radio_number=?, station_num=?, position_name=?, email=? WHERE person_id = ?'
);

$stmt->execute(
[
$_POST['first_name'],
$_POST['last_name'],
$_POST['gender'],
$_POST['street_address'],
$_POST['city'],
$_POST['state'],
$_POST['zipcode'],
$_POST['phone'],
$_POST['radio_number'],
$_POST['station_num'],
$_POST['position_name'],
$_POST['email'],
$_POST['person_id']
]
);

//Step 4: Output
header('HTTP/1.1 303 See other');
//300 redirect with a git
header('Location: ../records/');
